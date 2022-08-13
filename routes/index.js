const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('../docs/swagger.config');

require('express-async-errors');
const phonebook = require('./phonebook');
const user = require('./user');

const root = express.Router({ mergeParams: true });

root.use('/phonebook', phonebook);
root.use('/user', user);

const swaggerDoc = swaggerJSDoc(swaggerConfig);
root.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

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
