const connection = require('../connection');

const serialize = (contact) => ({
  userId: contact.users_id,
  contact: {
    id: contact.id,
    name: contact.name,
    phone: contact.number,
  },
});

const find = async (userId, phoneId) => {
  const query = 'SELECT * FROM phonebook WHERE users_id = $1 AND id = $2';

  const [contactFound] = await connection.query(query, [userId, phoneId]);

  if (!contactFound) return null;

  return serialize(contactFound);
};

module.exports = find;
