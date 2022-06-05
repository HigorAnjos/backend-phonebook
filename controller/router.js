const express = require('express');
require('express-async-errors');
const phonebook = require('./phonebook/router');
const user = require('./user/router');
require('dotenv').config();

const root = express.Router({ mergeParams: true });

root.use('/phonebook', phonebook);
root.use('/user', user);

root.get('/', (_req, res) => res.send({
  message: 'Hello World',
  ambiente: process.env.DB_HOST,
}));

console.log('process.env.DB_HOST', process.env.DB_HOST);
console.log('process.env.DB_PORT', process.env.DB_PORT);
console.log('process.env.DB_NAME', process.env.DB_NAME);
console.log('process.env.DB_USER', process.env.DB_USER);
console.log('process.env.DB_PASS', process.env.DB_PASS);

root.use((error, _req, res, _next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = root;
