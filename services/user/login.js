const bcrypt = require('bcrypt');
const find = require('./find');

const login = async (email, userInsertedPassword) => {
  const userFound = await find(email); // humm pedir ajudar pra criar o teste ---
  // console.log('userFound=> ', userFound);

  if (!userFound) {
    return false;
  }

  const isCorret = await bcrypt.compare(userInsertedPassword, userFound.password);
  if (!isCorret) {
    return false;
  }

  return userFound;
};

module.exports = login;
