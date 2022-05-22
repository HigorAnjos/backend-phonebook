const express = require('express');
const phonebook = require('./phonebook/router');
const user = require('./user/router');

const root = express.Router({ mergeParams: true });

root.use('/phonebook', phonebook);
root.use('/user', user);

root.get('/', function (_req, res) {
  res.send('Hello World');
});

module.exports = root;
