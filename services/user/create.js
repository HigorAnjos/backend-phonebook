const models = require('../../models/user');

const create = async (name, email, password) => {
  const userHasTheSameEmailFound = await models.find(email);

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
