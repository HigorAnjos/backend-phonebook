const model = require('../../models/phonebook/index');

const update = async (userId, name, phone, phoneId) => {
  const affectedRows = await model.update(userId, name, phone, phoneId);

  return affectedRows;
}

module.exports = update;
