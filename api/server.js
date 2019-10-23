const primaryRouter = require('express').Router();

// API Subroutes
const users = require('./public/users/users');
const auth = require('./auth/adminPortal');
const admin = require('../api/private/admin/adminRouter');

// Errors
const errorRouter = require('./errors/errors');

// Login + Register
primaryRouter.use('/', auth);

// Public Routes
primaryRouter.use('/public', users);

// Private Routes
primaryRouter.use('/admin', admin);

// Error Route
primaryRouter.use('*', errorRouter);

// console.dir(primaryRouter);

module.exports = primaryRouter;
