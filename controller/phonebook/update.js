const services = require('../../services/phonebook/index');

const update = async (req, res) => {
  const { id: phoneId } = req.params;
  const { name, phone } = req.body;
  const { id: userId } = req.user;

  const isOk = await services.update(userId, name, phone, phoneId);

  if (!isOk) {
    return res.status(400).json({ message: 'Não foi possivel atualizar o numero' });
  }

  return res.status(200).json({ message: 'Numero atualizado com sucesso' });
};

module.exports = update;
