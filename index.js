const express = require('express')
const mongoose = require('mongoose')

const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5001

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.lzym7ll.mongodb.net/diplom_db?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port ${PORT}...`))
    } catch (e) {
        console.log(e);
    }
}

start()