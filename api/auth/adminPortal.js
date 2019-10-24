const router = require('express').Router();
const dbModel = require('./adminPortalModel');

// Login
router.post('/login', (req, res) => {
  const body = req.body;
  const { username, password } = req.body;
});

// Register
router.post('/register', (req, res) => {
  
});

module.exports = router;
