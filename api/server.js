const primaryRouter = require('express').Router();

// API Subroutes
const users = require('./public/users/users');
const auth = require('./auth/authRouter');
const admin = require('./private/admin/adminRouter');

// Errors
const errorRouter = require('./errors/errors');

// Login + Register
primaryRouter.use('/auth', auth);

// Public Routes
primaryRouter.use('/public', users);

// Private Routes
primaryRouter.use('/private', admin);

// Error Route
primaryRouter.use('*', errorRouter);

// console.dir(primaryRouter);
// console.log(users);

module.exports = primaryRouter;
