const express = require('express');
const phonebook = require('./controller/phonebook/router');
require('dotenv').config();
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

app.use('/phonebook', phonebook);

app.get('/', function (_req, res) {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
});
