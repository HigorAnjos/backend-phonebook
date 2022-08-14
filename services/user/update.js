const models = require('../../models/user/index');
// const find = require('./find');

const update = async (name, email, password, userId) => {
  const userHasTheSameEmailFound = await models.find(email);

  if (userHasTheSameEmailFound && userId !== userHasTheSameEmailFound.dataValues.id) {
    return 0; // email ja cadastrado
  }

  return models.update(name, email, password, userId);
};

module.exports = update;
