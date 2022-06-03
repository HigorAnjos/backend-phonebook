const services = require('../../services/phonebook/index');

const list = async (req, res) => {
  const { id: userId } = req.user;

  const phonebook = await services.list(userId);

  return res.status(200).json(phonebook);
};

module.exports = list;
