const connection = require('../connection');

const serialize = (phonebook, userId) => ({
  userId,
  phonebook, /// [{name: 'alguem', number: '+380967891234'}, {}, {}]
});

const list = async (userId) => {
  const query = `SELECT phone.id, phone.name, phone.number as phone
  FROM phonebook as phone
  INNER JOIN users as users ON users.id = phone.users_id
  WHERE phone.users_id = $1`;

  const phonebook = await connection.query(query, [userId]);

  return serialize(phonebook, userId);
};

module.exports = list;
