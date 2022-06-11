const { Users } = require('../../database/models');

const find = async (email) => {
  const user = await Users.findOne({ where: { email } });
  return user;
};

find('george@gmail.com');

module.exports = find;
