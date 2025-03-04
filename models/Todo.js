const mongoose = require('mongoose')

const todoTaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  }
})

module.exports = mongoose.model('TodoTask', todoTaskSchema, 'todos') // first parameter is how you'll refer to it in your code, second parameter is the specific schema you're referencing and the third parameter is collection name