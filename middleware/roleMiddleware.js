const jwt = require("jsonwebtoken");
const {secret} = require("../config");

module.exports = function (rolesArray) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(400).json({ message: 'Пользователь не авторизован'})
            }
            const {roles: userRoles} = jwt.verify(token, secret)
            let hasRole = false
            userRoles.forEach(role => {
                if (rolesArray.includes(role)) {
                    hasRole = true;
                }
            })
            if (!hasRole) {
                return res.status(400).json({ message: 'У вас нет доступа' })
            }
            next()
        } catch(e) {
            console.log(e);
            console.log('Пользователь не авторизован')
            return res.status(400).json({ message: 'Пользователь не авторизован', success: false, isAuth: false });
        }
    }
}