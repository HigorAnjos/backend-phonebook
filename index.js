const app = require('./server');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
