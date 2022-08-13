const bcrypt = require('bcrypt');
const models = require('../../models/user');

const login = async (email, userInsertedPassword) => {
  const userFound = await models.find(email);

  if (!userFound) {
    return false;
  }

  const isCorret = await bcrypt.compare(userInsertedPassword, userFound.dataValues.password);
  if (!isCorret) {
    return false;
  }

  return userFound.dataValues;
};

module.exports = login;
