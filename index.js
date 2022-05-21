const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
});
