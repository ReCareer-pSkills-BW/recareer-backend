const router = require('express').Router();
const dbModel = require('./authModel');
const bcrypt = require('bcryptjs');
const { genToken } = require('./preAuth/generateToken');

// Login
router.post('/register', (req, res) => {
  const body = req.body;
  const { username, password } = req.body;

  !username && !password
    ? res.status(400).json({ msg: `Requires username and password` })
    : (password = bcrypt.hashSync(password, 12));

  dbModel
    .register(body)
    .then(admin => {
      res.status(201).json(admin);
    })
    .catch(err => {
      res.status(500).json({ err: `Server Error: Unable to register account` });
    });
});

// Register
router.post('/login', (req, res) => {
  const body = req.body;
  const { username, password } = req.body;
  const token = genToken(admin);

  !username && !password
    ? res.status(400).json({ msg: `Requires username and password` })
    : dbModel
        .findByUserName()
        .first()
        .then(admin => {
          admin && bcrypt.compareSync(password, admin.password)
            ? res.status(200).json({ msg: `login success`, token })
            : res.status(401).json({ msg: `invalid credentials` });
        })
        .catch(err => {
          res
            .status(500)
            .json({ err: `Server Error: Unable to register account` });
        });
});

module.exports = router;
