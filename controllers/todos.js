const Todo = require('../models/Todo')

module.exports = {
  getTodos: async (req,res)=>{
      try {
        const todoItems = await Todo.find()
        res.render('todos.ejs', {
          TodoTask: todoItems
        })
      } catch (error) {
        console.log(error)
      } 
  },
  createTodo: async (req, res) => {
    try {
      await Todo.create({
        title: req.body.title,
        content: req.body.content
      }) //? the "req.body.title" and "req.body.content" come from the corresponding name values on the input/textarea tags on the ejs file 
      console.log('Todo has been created')
      res.redirect('/todos')
    } catch (error) {
      console.log(error)
    }
  },
  deleteTodo: async (req, res)=>{
    //console.log(req.body.todoIdFromJSFile)
    try{
        await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
        console.log('Deleted Todo')
        res.json('Deleted It')
    }catch(err){
        console.log(err)
    }
  }
}

// module.exports = {
//   getTodos: async (req,res)=>{
//       try {
//         res.render('todos.ejs', {todoTasks: tasks})
//       } catch (error) {
//         console.log(error)
//       } 
//   }
// }