require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite',
    useNullAsDefault: true,
    debug: true,
    connection: {
      filename: './data/recareer.sqlite3'
    },
    migrations: { // Working
      directory: './data/migrations/dev'
    },
    seeds: { // Working
      directory: './data/seeds/dev'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },

  staging: {
    client: 'pg',
    connection: process.env.DB_STAGING,
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
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations/production'
    },
    seeds: {
      directory: './data/seeds/production'
    }
    // debug: true
  }
};
