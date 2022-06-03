const services = require('../../services/phonebook/index');

const remove = async (req, res) => {
  const { id: phoneId } = req.params;
  const { id: userId } = req.user;

  const isOk = await services.remove(userId, phoneId);

  if (!isOk) {
    return res.status(400).json({ error: 'Não foi possivel remover o numero' });
  }

  return res.status(200).end();
}

module.exports = remove;
