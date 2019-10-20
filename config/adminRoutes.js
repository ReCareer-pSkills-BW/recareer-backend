const express = require('express');
const AdminRouter = express.Router();
const db = require('../data/models/adminModel');
// //Middleware
const validateAdmin = require('../middleware/validateAdmin');

//CRUD
////Create
AdminRouter.post('/new_provider/', validateAdmin, (req, res) => {
  const newAccount = req.body;

  db.add(newAccount)
    .then(admin => {
      res.status(201).json({ msg: `new account created`, admin });
    })
    .catch(err => {
      console.dir(err);
      res.status(500).json({ err: `Unable to add new account`, ...err });
    });
});

////Read
//All
AdminRouter.get('/', (req, res) => {
  db.find()
    .then(admin => {
      res.status(200).json(admin);
    })
    .catch(err => {
      res.status(500).json({ ...err });
    });
});

//ById
AdminRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  db.findById(id)
    .then(id => {
      !id
        ? res.status(404).json({ err: `User not found` })
        : res.status(200).json(id);
    })
    .catch(err => {
      res.status(500).json({ ...err });
    });
});

////Update
AdminRouter.put('/:id', validateAdmin, (req, res) => {
  const body = req.body;
  const id = req.params.id;
  db.update(id, body)
    .then(account => {
      res.status(201).json({ msg: `Account updated successfully`, account });
    })
    .catch(err => {
      res.status(400).json({ ...err });
    });
});

////Delete
AdminRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(account => {
      res.status(200).json({ msg: `User sucessfully deleted` });
    })
    .catch(err => {
      res.status(500).json({ ...err });
    });
});

module.exports = AdminRouter;
