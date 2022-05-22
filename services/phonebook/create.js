const model = require('../../models/phonebook');

const create = async (name, phone, user_id) => {
  const phonebook = await model.create(name, phone, user_id);
  return phonebook;
}

module.exports = create;
