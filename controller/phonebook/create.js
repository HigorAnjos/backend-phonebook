const services = require('../../services/phonebook/index');

const create = async (req, res) => {
  const { name, phone } = req.body;
  const { id } = req.user;

  const isOk = await services.create(name, phone, id);

  if (!isOk) {
    return res.status(400).json({ error: 'Não foi possivel cadastrar o numero' });
  }

  return res.status(201).json({ message: 'Numero cadastrado com sucesso' });
};

module.exports = create;
