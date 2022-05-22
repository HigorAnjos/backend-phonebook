const model = require('../../models/phonebook');

const create = async (name, phone, use_id) => {
  // validacao
  
  const phonebook = await model.create(name, phone, use_id);
  return phonebook;
}

module.exports = create;
