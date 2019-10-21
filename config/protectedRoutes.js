const protectedRouter = require('express').Router();
const validateAuth = require('../middleware/validateAuth');
const db = require('../data/dbConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// Register new admin account
protectedRouter.post('/register', validateAuth, (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 12);

  db.register(req.body)
    .then(account => {
      res.status(201).json(account);
    })
    .catch(err => {
      res.status(500).json({ ...err, msg: `Unable to register account` });
    });
});


protectedRouter.post('/login', (req, res) => {
    
})

module.exports = protectedRouter;
