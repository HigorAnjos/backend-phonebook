const model = require('../../models/phonebook/index');

const list = async (id) => {
  const result = await model.list(id);
  return result;
}

module.exports = list;
