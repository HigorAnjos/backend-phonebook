const model = require('../../models/phonebook/index');

const find = async (userId) => {
  const user = await model.find(userId);

  return user;
}

module.exports = find;
