const find = require('./find');
const bcrypt = require('bcrypt');

const login = async (email, userInsertedPassword) => {
  const userFound = await find(email); // humm pedir ajudar pra criar o teste ---
  // console.log('userFound=> ', userFound);

  if (!userFound) {
    return false;
  }

  const isCorret = await bcrypt.compare(userInsertedPassword, userFound.password);
  // console.log('is=> ', isCorret);
  if (!isCorret) {
    return false;
  }

  return userFound;
};

module.exports = login;
