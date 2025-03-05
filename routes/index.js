const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')
const loginController = require('../controllers/login')
const signupController = require('../controllers/signup')
// const todosController = require('../controllers/todos')

router.get('/', indexController.getIndex)
router.get('/login', loginController.getLogin)
router.get('/signup', signupController.getSignup)
// router.get('/todos', todosController.getTodos)


module.exports = router