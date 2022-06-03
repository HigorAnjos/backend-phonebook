const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'sua_senha',
  database: process.env.DB_NAME || 'model_example',
  port: process.env.DB_PORT || 3306,
});

module.exports = connection;