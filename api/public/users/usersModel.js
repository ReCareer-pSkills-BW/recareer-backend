const db = require(dbConfig);
const candidate = (module.exports = {
  findAll,
  findAllById,
  findAllByProvider
});

const candidates = 'candidates';
const providers = 'providers';

function findAll() {
  return db(providers);
}

function findAllById(id) {
  id = Array.isArray(id) ? [id] : id;
  return db(providers)
    .where({ id })
    .first();
}

function findAllByProvider(id) {
  id = Array.isArray(id) ? [id] : id;
  return db(candidates);
}
