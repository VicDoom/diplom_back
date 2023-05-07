const { Schema, model } = require('mongoose')

const TaskResult = new Schema({
    taskId: { type: Number, unique: false },
    userId: { type: String, ref: 'User' },
    difficulty: { type: Number, unique: false },
    isRight: { type: Boolean, default: false },
    date: { type: String }
})

module.exports = model('TaskResult', TaskResult);