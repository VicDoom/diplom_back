const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')

const generateAccessToken = (id, roles) => {
    const payload = { id, roles }
    return jwt.sign(payload, secret, { expiresIn: '1d' })
}

class AuthController {
    async home(req, res) {
        try {
            const { role } = req.body;
            const newRole = new Role({ value: role })
            await newRole.save();
            return res.status(200).json({ message: "Роль успешно создана", success: true })
        } catch (e) {
        }
    }
    async registration(req, res) {
        try {
            const errors = validationResult(req.body);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Не получилось зарегистрировать пользователя', success: false, errors })
            }
            const { username, password, role: reqRole } = req.body;
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({ message: 'Пользователь с таким именем уже существует', success: false })
            }
            const hashPassword = bcrypt.hashSync(password, 5);
            const role = await Role.findOne({ value: 'USER' });
            const addRole = await Role.findOne({ value: reqRole });
            console.log(addRole);
            if (role.value !== 'ADMIN' && !addRole) {
                return res.status(400).json({ message: 'Указанной роли не существует', success: false });
            }
            const user = new User({ username, password: hashPassword, roles: [role.value, addRole && addRole.value].filter(item => item) });
            await user.save();
            return res.json({ message: 'Пользователь успешно зарегистрирован!', success: true });
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Registration Error', success: false })
        }
    }

    async login(req, res) {
        try {
            console.log(req.body);
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(400).json({ message: `Пользователь ${username} не найден`, success: false });
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Неверный пароль', success: false });
            }
            // return res.status(200).json({ message: 'Пользователь вошел' })
            const token = generateAccessToken(user._id, user.roles);
            return res.json({token: token, id: user._id,  success: true})
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Login Error', success: false })
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            return res.json(users)
        } catch (e) {

        }
    }

    async getUserInfo(req, res) {
        try {
            const { id } = req.body;
            const userInfo = await User.findOne({ _id: id });
            if (!userInfo) {
                return res.status(400).json({ message: "Пользователь не найден", success: false });
            }
            return res.status(200).json({ data: { username: userInfo.username, roles: userInfo.roles }, success: true })
        } catch(e) {
            console.log(e);
        }
    }

    async getStudents(_, res) {
        try {
            console.log('here');
            const students = await User.find({ roles: 'STUDENT' });
            return res.json({ content: students, success: true });
        } catch (e) {
            console.log(e);
            return res.status(400).json({ message: 'Не удалось получить информацию о студентах', success: true })
        }
    }
}

module.exports = new AuthController()