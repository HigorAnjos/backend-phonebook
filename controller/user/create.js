const model = require('../../models/user');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  if(!name || !email || !password) {
    return {
      error: 'Dados incompletos'
    }
  }
  const user = await model.create(name, email, password);
  return res.status(200).json(user);
}

module.exports = create;
