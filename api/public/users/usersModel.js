const db = require(dbConfig);

module.exports = {
  findAll,
  findAllById
};

const table = 'admin';
const table2 = 'candidates'
function findAll() {
  return db(table);
}
// Need to add filter by provider.id


function findAllById(id) {
  id = Array.isArray(id) ? [id] : id;
  return db(table)
    .where({ id })
    .first();
}
// Need to add filter by provider.id