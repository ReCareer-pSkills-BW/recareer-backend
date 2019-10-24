const db = require(dbConfig);

module.exports = {
  findByUserName,
  addUser
};

const table = 'admin';

function findByUserName(user) {
  if (user.username) {
    const username = user.username;
    return db(table)
      .where({ username })
      .first();
  }
}

function addUser(obj) {
  return db(table)
    .insert(obj)
    .then(([id]) => findById(id));
}
