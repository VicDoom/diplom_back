const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { secret } = require('./config')

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
            return res.status(200).json({ message: "Роль успешно создана" })
        } catch (e) {
        }
    }
    async registration(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Не получилось зарегистрировать пользователя', errors })
            }
            const { username, password, role: reqRole } = req.body;
            const candidate = await User.findOne({username})
            if (candidate) {
                return res.status(400).json({ message: 'Пользователь с таким именем уже существует' })
            }
            const hashPassword = bcrypt.hashSync(password, 5);
            const role = await Role.findOne({ value: 'ADMIN' });
            const addRole = await Role.findOne({ value: reqRole });
            console.log(addRole);
            if (role.value !== 'ADMIN' && !addRole) {
                return res.status(400).json({ message: 'Указанной роли не существует' });
            }
            const user = new User({ username, password: hashPassword, roles: [role.value, addRole && addRole.value].filter(item => item) });
            await user.save();
            return res.json({ message: 'Пользователь успешно зарегистрирован!' });
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Registration Error' })
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            if (!user) {
                return res.status(400).json({ message: `Пользователь ${username} не найден` });
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Неверный пароль' });
            }
            // return res.status(200).json({ message: 'Пользователь вошел' })
            const token = generateAccessToken(user._id, user.roles);
            return res.json({token: token})
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Login Error' })
        }
    }

    async getUsers(req, res) {
        try {
            const users = await User.find()
            return res.json(users)
        } catch (e) {

        }
    }
}

module.exports = new AuthController()