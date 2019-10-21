const DBCONNECT =
  process.env.DBCONNECT || 'postgres://postgres@localhost:1617/postgres';

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/reCareer.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: DBCONNECT,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/staging'
    },
    seeds: {
      directory: './data/seeds/staging'
    }
  },

  production: {
    client: 'pg',
    connection: DBCONNECT,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/production'
    },
    seeds: './data/seeds/production'
  }
};
