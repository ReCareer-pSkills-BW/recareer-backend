const router = require('express').Router();
const dbModel = require('./adminPortalModel');

// Login
router.post('/login', (req, res) => {
  const b = req.body;
  if (b && b.username && b.password) {
    dbModel.findByUserName(b).then(b => {
      res.status(200).json({ msg: 'success', ...b });
    });
  } else {
    res.json({ err: 'Username & Password Required' });
  }
});

router.post('/register', (req, res) => {
  const b = req.body;
  if (b && b.username && b.password) {
    dbModel
      .addUser(b)
      .then(b => {
        res.status(200).json({ msg: 'success', ...b });
      })
      .catch(err => res.status(401).json(err));
  } else {
    res.json({ err: 'Username & Password Required' });
  }
});

module.exports = router;
