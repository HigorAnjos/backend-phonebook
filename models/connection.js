const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
  host: 'localhost' || process.env.DB_HOST,
  port: 5432 || process.env.DB_PORT,
  database: 'postgres' || process.env.DB_NAME,
  user: 'postgres' || process.env.DB_USER,
  password: 'postgres' || process.env.DB_PASS,
});

module.exports = db;
