const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: Boolean
    },
})

module.exports = mongoose.model('ToDo', todoSchema)