const express = require('express');
const root = require('./controller/router');

require('dotenv').config();
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

app.use('/', root);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
});
