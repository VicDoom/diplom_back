const Tasks = require("../tasks/index");
const TaskResult = require('../models/TaskResult');
const Theory = require('../models/Theory');

class StudySystemController {
    async getTask(req, res) {
        try {
            const taskId = req.params.id;
            if (taskId > Object.keys(Tasks).length) {
                return res.status(404).json({ message: 'Задание не найдено', success: false });
            }
            return res.status(200).json({content: Tasks[`Task${taskId}`].method(), success: true});
        } catch (e) {
            console.log(e);
        }
    }

    async getTaskList(req, res) {
        try {
            return res.status(200).json({ content: Object.values(Tasks).map(value => ({ id: value.id, title: value.title })) });
        } catch(e) {
            console.log(e);
        }
    }

    async postTaskResult(req, res) {
        try {
            const { taskId, userId, isRight, date } = req.body;
            const newTaskResult = new TaskResult({ taskId, userId, difficulty: 4, isRight, date });
            await newTaskResult.save();
            return res.json({ message: 'Результат сохранен', success: true });
        } catch(e) {
            console.log(e);
            return res.status(400).json({ message: 'Не удалось сохранить результат решения', success: false })
        }
    }

    async getTasksResult(req, res) {
        try {
            const { taskId, userId } = req.body;
            let tasks = [];
            if (taskId) {
                tasks = await TaskResult.find({ userId, taskId });
            } else {
                tasks = await TaskResult.find({ userId });
            }
            return res.json({ data: tasks, success: true });
        } catch(e) {
            console.log(e);
        }
    }

    async postTheory(req, res) {
        try {
            const { id, title, body } = req.body;
            const newTheory = new Theory({ taskId: id, title, body });
            await newTheory.save();
            return res.status(200);
        } catch(e) {
            console.log(e);
            return res.status(400).json({ message: 'Не удалось сохранить теорию', success: false })
        }
    }

    async getTheories(_, res) {
        try {
            const theories = await Theory.find();
            return res.json({ content: theories, success: true });
        } catch(e) {
            console.log(e);
            return res.status(400).json({ message: 'Не удалось получить теорию', success: true });
        }
    }

    async getTheory(req, res) {
        try {
            const taskId = req.params.id;
            const theory = await Theory.find({ taskId });
            return res.status(200).json({ content: theory, success: true });
        } catch(e) {
            console.log(e);
            return res.json(400).json({ message: 'Не удалось получить теоретическую справку', success: false });
        }
    }
}

module.exports = new StudySystemController()