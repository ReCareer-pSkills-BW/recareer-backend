require('dotenv').config();
const DBCONNECT =
  process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/postgres';

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/recareer.db3'
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
      }
      //debug:true,
    }
  }
};
