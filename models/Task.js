const { Schema, model } = require('mongoose')

const Task = new Schema({
    id: { type: Number, unique: true },
    title: { type: String, unique: true, default: 'Default Task' },
    values: { type: Object, default: {} },
    answer: { type: Number | String },
})

module.exports = model('Task', Task);