const db = require('../dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  return db('admin');
}

function findById(id) {
  return db('admin')
    .where({ id })
    .first();
}

function add(account) {
  return db('admin')
    .insert(account)
    .then(id => {
      return findById(id[0]);
    });
}

function remove(id) {
  return db('admin')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('admin')
    .where({ id })
    .update(changes, '*');
}
