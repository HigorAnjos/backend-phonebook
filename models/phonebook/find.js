const connection = require('../connection');

const serialize = (contact) => ({
  userId: contact.user_id,
  contact: {
    id: contact.id,
    name: contact.name,
    phone: contact.number,
  },
});

const find = async (userId, phoneId) => {
  const query = 'SELECT * FROM model_phonebook.phonebook WHERE user_id = ? AND id = ?';

  const [[ contactFound ]] = await connection.execute(query, [userId, phoneId]);

  if (!contactFound) return null;

  return serialize(contactFound);
}

module.exports = find;
