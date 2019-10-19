const express = require('express');
const adminRouter = express.Router();
const db = require('../data/models/adminModel');
// //Middleware
const validateUser = require('../middleware/validateUser');

//CRUD
////Create
adminRouter.post('/new_account/', validateUser, (req, res) => {
  const newAccount = req.body;
  db.add(newAccount)
    .then(account => {
      res.status(201).json({ msg: `new account created`, account });
    })
    .catch(err => {
      console.table(err);
      res.status(500).json({ err: `Unable to add new account: ${err}` });
    });
});

////Read
//All
adminRouter.get('/', (req, res) => {
  db.find()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(err => {
      res.status(500).json({ ...err });
    });
});

//ById
adminRouter.get('/:id', (req, res) => {
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
adminRouter.put('/:id', (req, res) => {
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
adminRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(account => {
      res.status(200).json({ msg: `User sucessfully deleted` });
    })
    .catch(err => {
      res.status(500).json({ ...err });
    });
});

module.exports = adminRouter;