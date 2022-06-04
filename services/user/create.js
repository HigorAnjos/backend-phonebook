const models = require('../../models/user');

const create = async (name, email, password) => {
  const newUserId = await models.create(name, email, password);

  if (!newUserId) {
    return null;
  }
  return newUserId;
};

module.exports = create;
