import * as dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../.env` });

export type Config = {
  db: {
    host: string;
    database: string;
    user: string;
    password: string;
    port: number;
  };
};

const config: Config = {
  db: {
    host: process.env.PSQL_HOST || 'localhost',
    database: process.env.PSQL_DATABASE || '',
    user: process.env.PSQL_USER || '',
    password: process.env.PSQL_PASSWORD || '',
    port: Number(process.env.PSQL_PORT) || 5432,
  },
};

Object.entries(config.db).forEach(([name, value]) => {
  if (!value) throw new Error('Missing value for ' + name);
});

export default config;
