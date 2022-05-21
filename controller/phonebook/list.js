const model = require('../../models/phonebook');

const list = async (req, res) => {
  const { id } = req.params;

  const result = await model.list(id);

  return res.status(200).send(result);
}

module.exports = list;