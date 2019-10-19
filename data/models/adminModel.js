const db = require('../dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  return db('accounts');
}

function findById(id) {
  return db('accounts')
    .where({ id })
    .first();
}

function add(account) {
  return db('accounts')
    .insert(account)
    .then(id => {
      return findById(id[0]);
    });
}

function remove(id) {
  return db('accounts')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('accounts')
    .where({ id })
    .update(changes, '*');
}
