const services = require('../../services/phonebook/index');

const find = async (req, res) => {
  const { id: phoneId } = req.params;
  const { id: userId } = req.user;

  const contactFound = await services.find(userId, phoneId);

  if (!contactFound) {
    return res.status(404).json({
      message: 'Contato não encontrado',
    });
  }

  return res.status(200).json(contactFound);
};

module.exports = find;
