const db = require(dbConfig);

module.exports = {
  findByUserName,
  register
};

const table = 'admin';

function findByUserName(admin) {
  if (admin.username) {
    const username = admin.username;
    return db(table)
      .where({ username })
      .first();
  }
}

function register(admin) {
  return db(table)
    .insert(admin)
    .then(([id]) => findById(id));
}
