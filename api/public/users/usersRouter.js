const router = require('express').Router();
const dbModel = require('./usersModel');

router.get('/', (req, res) => {
  return dbModel
    .findAll()
    .then(p => {
      res.status(200).json({ msg: `Returned all accounts`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: 'Error', ...e });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllById(id)
    .then(p => {
      res.status(200).json({ msg: `Fetch account success`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: 'Error', ...e });
    });
});


module.exports = router;
