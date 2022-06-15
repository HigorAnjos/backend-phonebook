const models = require('../../models/user/index');

const find = async (email) => {
  const user = await models.find(email);

  if (!user) {
    return null;
  }

  return user.dataValues;
};

module.exports = find;
