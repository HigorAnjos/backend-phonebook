const { Users } = require('../../database/models');

const update = async (name, email, password, userId) => {
  const [upId] = await Users.update({ name, email, password }, { where: { id: userId } });

  console.log(upId);

  return upId;
};

module.exports = update;
