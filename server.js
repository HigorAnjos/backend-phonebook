const express = require('express');
const root = require('./controller/router');

require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', root);

module.exports = app;