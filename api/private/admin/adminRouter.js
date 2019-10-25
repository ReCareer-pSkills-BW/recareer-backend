const router = require('express').Router();
const dbModel = require('./adminModel');

router.get('/admin/', (req, res) => {
  return dbModel
    .findAll()
    .then(p => {
      res.status(200).json({ msg: `Returned all accounts`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: 'Error', ...e });
    });
});

router.get('/admin/:id', (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllById(id)
    .then(p => {
      res.status(200).json({ msg: `Fetch account success`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: `Error`, ...e });
    });
});

router.post('/admin/', (req, res) => {
  const { body } = req;
  return dbModel
    .add(body)
    .then(p => {
      res.status(201).json({ msg: `Account created`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: 'Error', ...e });
    });
});

router.put('/admin/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;

  return dbModel
    .editById(id)
    .then(p => {
      res.status(200).json({ msg: `Accounted updated`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: 'Error', ...e });
    });
});

router.delete('/admin/:id', (req, res) => {
  const { id } = req.params;

  return dbModel
    .remove(id)
    .then(p => {
      res.status(201).json({ msg: `Account deleted`, ...p });
    })
    .catch(e => {
      res.status(404).json({ msg: 'Error', ...e });
    });
});
module.exports = router;
