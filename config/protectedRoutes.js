const protectedRouter = require('express').Router();
const db = require('../data/dbConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

protectedRouter.post('/register', (req, res) => {
    
})