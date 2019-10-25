require('dotenv').config();
const stagingdb = {
  database: 'test',
  user: 'postgres',
  password: 'H0lyBatman__Yee'
};

module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: stagingdb,
    migrations: {
      // Working
      directory: './data/migrations/dev'
    },
    seeds: {
      // Working
      directory: './data/seeds/dev'
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
