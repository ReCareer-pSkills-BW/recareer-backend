const primaryRouter = require('express').Router();

// API Subroutes
const users = require('./public/users/users');
const admin = require('../api/private/admin/adminRouter');
const adminPortal = require('./auth/adminPortal');

// Errors
const errorRouter = require('./errors/errors');

// Login + Register
primaryRouter.use('/', adminPortal);

// Public Routes
primaryRouter.use('/public', users);

// Private Routes
primaryRouter.use('/admin', admin);

// Error Route
primaryRouter.use('*', errorRouter);

module.exports = primaryRouter;
