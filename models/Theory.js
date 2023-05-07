const { Schema, model } = require('mongoose')

const Theory = new Schema({
    taskId: { type: Number, unique: true },
    title: { type: String },
    body: { type: String },
})

module.exports = model('Theory', Theory);