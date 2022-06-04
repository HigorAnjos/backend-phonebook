const express = require('express');
require('express-async-errors');
const phonebook = require('./phonebook/router');
const user = require('./user/router');

const root = express.Router({ mergeParams: true });

root.use('/phonebook', phonebook);
root.use('/user', user);

root.get('/', (_req, res) => res.send({ message: 'Hello World' }));

root.use((error, _req, res, _next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = root;
