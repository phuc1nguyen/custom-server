import type { Knex } from 'knex';
import dbConfig from './config';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: dbConfig.db,
    migrations: {
      directory: `${__dirname}/../database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/../database/seeds`,
    },
    debug: true,
  },

  production: {
    client: 'pg',
    connection: dbConfig.db,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

module.exports = config;
