const Router = require('express')
const router = new Router()
const controller = require('../controllers/studySystemController')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.get('/task/:id', roleMiddleware(['USER']), controller.getTask);
router.get('/tasks', authMiddleware, roleMiddleware(['USER']), controller.getTaskList);
router.post('/task', authMiddleware, controller.postTaskResult)
router.post('/tasks-result', authMiddleware, controller.getTasksResult)
router.post('/theory-post', controller.postTheory);
router.get('/theories', controller.getTheories);
router.get('/theory/:id', authMiddleware, controller.getTheory);

module.exports = router;