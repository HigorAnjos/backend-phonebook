require('dotenv').config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT,
  DB_PORT,
} = process.env;

module.exports = {
  development: {
    username: 'root',
    password: 'password',
    database: 'model_phonebook',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
  },
  production: {
    username: 'root' || DB_USER,
    password: null || DB_PASSWORD,
    database: 'database_production' || DB_NAME,
    host: '127.0.0.1' || DB_HOST,
    dialect: 'mysql' || DB_DIALECT,
    port: 3306 || DB_PORT,
  },
};
