const model = require('../../models/phonebook/index');

const list = async (id) => {
  const phonebook = await model.list(id);

  return phonebook;
}

module.exports = list;
