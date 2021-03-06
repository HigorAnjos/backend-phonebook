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
    password: 'password',
    database: 'model_phonebook',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
