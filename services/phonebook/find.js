const model = require('../../models/phonebook/index');

const find = async (userId, phoneId) => {
  const contactFound = await model.find(userId, phoneId);

  if (!contactFound) {
    return null;
  }

  return contactFound;
}

module.exports = find;
