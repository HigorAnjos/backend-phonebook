const pgp = require('pg-promise')();
require('dotenv').config();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'postgres',
});

module.exports = db;
