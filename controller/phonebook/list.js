const services = require('../../services/phonebook/index');

const list = async (req, res) => {
  const { id } = req.user;

  const result = await services.list(id);

  return res.status(200).send(result);
}

module.exports = list;
