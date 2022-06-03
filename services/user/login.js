const model = require('../../models/user/index');

const login = async (email, password) => {
  const [user] = await model.find(email, password);
  if (!user) {
    return null;
  }
  return user;
};

module.exports = login;