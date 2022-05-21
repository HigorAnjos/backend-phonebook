const model = require('../../models/phonebook');

const getAllById = async (req, res) => {
  const { id } = req.params;
  const result = await model.getAll(id);
  return res.status(200).send(result);
}

module.exports = getAllById;