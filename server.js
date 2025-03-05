const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const indexRoutes = require('./routes/index')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(logger('dev'))

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash()) // setting up flash alerts for when things go wrong with login or signup

app.use('/', indexRoutes)
app.use('/todos', todoRoutes)

// app.get('/', (req, res) => {
//   res.render('index.ejs')
//   console.log('Home Page loaded')
// })

app.listen(process.env.PORT, () => {
  console.log(`Server running on Port:${process.env.PORT}`)
})