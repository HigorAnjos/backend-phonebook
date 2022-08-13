const services = require('../../services/phonebook/index');

const create = async (req, res) => {
  const { name, phone } = req.body;
  const { id } = req.user;

  const isOk = await services.create(name, phone, id);

  if (!isOk) {
    return res.status(400).json({ message: 'Não foi possivel cadastrar o numero' });
  }

  return res.status(201).json({ id: isOk });
};

module.exports = create;
