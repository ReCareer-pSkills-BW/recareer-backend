const router = require('express').Router();
const dbModel = require('./usersModel');

router.get('/', (req, res) => {
  return dbModel
    .findAll()
    .then(p => {
      res.status(200).json({ msg: `Returned all providers`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: 'Error', ...e });
    });
}); // Returns all providers

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
}); // Return provider by id

router.get('/:id/candidates', (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllByProvider(id)
    .then(p => {
      res.status(200).json({ msg: `Fetch provider candidates success`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: 'Error', ...e });
    });
}); // Return candidates by provider id


module.exports = router;
