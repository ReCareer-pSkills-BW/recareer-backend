require('dotenv').config();
const DBCONNECT =
  process.env.DATABASE_URL ||
  'postgres://zyplamdxbqeutx:7a54cf92d2d7b27569b86c07e8424a8717d8fc79b5bef39101f4571ef4c50f39@ec2-54-204-39-43.compute-1.amazonaws.com:5432/d37j1img56crlv';

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    debug: true,
    connection: {
      filename: './data/recareer.sqlite3'
    },
    migrations: {
      directory: './data/migrations/dev'
    },
    seeds: {
      directory: './data/seeds/dev'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
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
      seeds: {
        directory: './data/seeds/production'
      },
      debug:true,
    }
  }
};
