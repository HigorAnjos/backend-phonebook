const model = require('../../models/phonebook');

const create = async (name, phone, userId) => {
  const phonebook = await model.create(name, phone, userId);

  return phonebook;
};

module.exports = create;
