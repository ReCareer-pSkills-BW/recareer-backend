const primaryRouter = require('express').Router()

// API Subroutes
const users = require('./public/users/users')
const authPortal = require('./auth/portal')

//Call Errors Last
const errorRouter = require('./errors/errors')

// LOGIN REGISTER
primaryRouter.use('/',authPortal)

//PUBLIC ROUTES


//PRIVATE ROUTES
primaryRouter.use('/users',users)

//Handle any errors coming into API
primaryRouter.use('*',errorRouter)

module.exports = primaryRouter