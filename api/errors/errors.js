const router = require('express').Router();

router.get('*', (req, res) => {
  res.status(401).json({ msg: 'End of Data: Not Found - GET' });
});

router.post('*', (req, res) => {
  res.status(401).json({ msg: 'End of Data: Not Found - POST' });
});

router.put('*', (req, res) => {
  res.status(401).json({ msg: 'End of Data: Not Found - PUT' });
});

router.delete('*', (req, res) => {
  res.status(401).json({ msg: 'End of Data: Not Found - DELETE' }, ``);
});

module.exports = router;
