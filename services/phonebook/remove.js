const model = require('../../models/phonebook/index');

const remove = async (userId, phoneId) => {
  const affectedRows = await model.remove(userId, phoneId);

  return affectedRows;
};

module.exports = remove;
