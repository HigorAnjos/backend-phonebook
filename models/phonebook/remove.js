const { Phonebook } = require('../../database/models');

const remove = (userId, phoneId) => Phonebook.destroy({ where: { id: phoneId, user_id: userId } });

module.exports = remove;
