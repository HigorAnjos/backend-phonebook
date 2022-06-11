const { Users } = require('../../database/models');

const create = async (name, email, password) => {
  const { id } = await Users.create({ name, email, password });

  return id;
};

module.exports = create;
