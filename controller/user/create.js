const services = require('../../services/user/index')

const create = async (req, res) => {
  const { name, email, password } = req.body;
  if(!name || !email || !password) {
    return {
      error: 'Dados incompletos'
    }
  }
  const isOk = await services.create(name, email, password);
  if(!isOk) {
    return res.status(400).json({
      error: 'Erro ao cria usuário'
    });
  }

  return res.status(200).json(user);
}

module.exports = create;
