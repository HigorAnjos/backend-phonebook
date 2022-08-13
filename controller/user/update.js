const bcrypt = require('bcrypt');
const services = require('../../services/user/index');

const update = async (req, res) => {
  const { id: userId } = req.user;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: 'Dados incompletos para atualizar',
    });
  }

  const passwordHash = await bcrypt.hash(password, 5);

  const userUpdated = await services.update(name, email, passwordHash, userId);

  if (!userUpdated) {
    return res.status(400).json({ message: 'Não foi possivel atualizar o usuário' });
  }

  return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
};

module.exports = update;
