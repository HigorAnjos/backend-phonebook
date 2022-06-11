const { Phonebook } = require('../../database/models');

const serialize = (contact) => ({
  userId: contact.user_id,
  contact: {
    id: contact.id,
    name: contact.name,
    phone: contact.phone,
  },
});

const find = async (userId, phoneId) => {
  const contact = await Phonebook.findOne({ where: { user_id: userId, id: phoneId } });
  if (!contact) return null;

  return serialize(contact);
};

module.exports = find;
