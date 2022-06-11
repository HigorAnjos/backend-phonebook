const { Phonebook } = require('../../database/models');

const update = async (userId, name, phone, phoneId) => {
  const [affectedRows] = await Phonebook.update({ name, number: phone }, { where: { id: phoneId, user_id: userId } });

  return affectedRows;
};

module.exports = update;
