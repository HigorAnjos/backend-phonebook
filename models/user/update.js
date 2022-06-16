const { Users } = require('../../database/models');

const update = async (name, email, password, userId) => {
  const [affectedRows] = await Users.update({ name, email, password }, { where: { id: userId } });

  console.log(affectedRows);

  return affectedRows;
};

module.exports = update;
