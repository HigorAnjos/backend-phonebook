const model = require('../../models/phonebook');

module.exports = async (req, res) => {
  const { id } = req.params;
  const result = await model.getAll(id);
  return res.status(200).send(result);
}