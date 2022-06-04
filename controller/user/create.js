const services = require('../../services/user/index');
const bcrypt = require('bcrypt');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return {
      error: 'Dados incompletos',
    };
  }
  // crypto password
  const passwordHash = await bcrypt.hash(password, 10);
  // create user
  const isOk = await services.create(name, email, passwordHash);

  if (!isOk) {
    return res.status(400).json({
      error: 'Erro ao cria usuário',
    });
  }

  return res.status(200).json(isOk);
};

module.exports = create;
