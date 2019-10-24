const router = require('express').Router();
const dbModel = require('./adminModel');

router.get('/admin/', (req, res) => {
  return dbModel
    .findAll()
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: 'SOMEMESSAGE', ...e });
    });
});
router.get('/admin/:id', (req, res) => {
  const { id } = req.params;
  return dbModel
    .findAllById(id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: 'SOMEMESSAGE', ...e });
    });
});

router.post('/admin/', (req, res) => {
  const { body } = req;
  return dbModel
    .add(body)
    .then(p => {
      res.status(201).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: 'SOMEMESSAGE', ...e });
    });
});
router.put('/admin/:id', (req, res) => {
  const { id } = req.params;
  const { body } = req;

  return dbModel
    .editById(id)
    .then(p => {
      res.status(200).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: 'SOMEMESSAGE', ...e });
    });
});
router.delete('/admin/:id', (req, res) => {
  const { id } = req.params;

  return dbModel
    .remove(id)
    .then(p => {
      res.status(201).json({ message: `SUCCESS`, ...p });
    })
    .catch(e => {
      res.status(404).json({ message: 'SOMEMESSAGE', ...e });
    });
});
module.exports = router;
