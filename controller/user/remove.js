const services = require('../../services/user/index');

const remove = async (req, res) => {
  const { id: userId } = req.user;

  const userRemoved = await services.remove(userId);

  if (!userRemoved) {
    return res.status(400).json({ message: 'Não foi possivel remover o usuário' });
  }

  return res.status(200).json({ message: 'Usuário removido com sucesso' });
};

module.exports = remove;
