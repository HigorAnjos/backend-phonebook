const model = require('../../models/phonebook');

model.exports = async (req, res) => {
  const result = await model.getAll();
  return res.status(200).send(result);
}