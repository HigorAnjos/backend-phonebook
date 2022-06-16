const models = require('../../models/user');
const find = require('./find');

const create = async (name, email, password) => {
  const userHasTheSameEmailFound = await find(email);

  if (userHasTheSameEmailFound) {
    return null; // email ja cadastrado
  }

  const newUserId = await models.create(name, email, password);

  if (!newUserId) {
    return null;
  }
  return newUserId;
};

module.exports = create;
