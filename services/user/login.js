const models = require('../../models/user/index');

const login = async (email) => {
  const [user] = await models.find(email);

  if (!user) {
    return null;
  }

  return user;
};

module.exports = login;
