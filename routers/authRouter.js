const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const { check } = require('express-validator')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post('/', controller.home)
router.post('/registration', [
    check('username', 'Имя пользователя не должно быть пустым').notEmpty(),
    check('password', 'Пароль должен быть не короче 6 символов').isLength({ min: 6 }),
], controller.registration)
router.post('/login', controller.login);
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers);
router.get('/students', roleMiddleware(['ADMIN', 'TEACHER']), controller.getStudents);
router.post('/user-info', controller.getUserInfo);

module.exports = router;