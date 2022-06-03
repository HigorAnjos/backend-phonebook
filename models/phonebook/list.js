const connection = require('../connection');

const serialize = (phonebook, userId) => ({
  userId,
  phonebook, /// [{name: 'alguem', number: '+380967891234'}, {}, {}]
});

const list = async (userId) => {
const query = `SELECT phone.id, phone.name, phone.number as phone
FROM model_phonebook.phonebook as phone
INNER JOIN model_phonebook.user as user ON user.id = phone.user_id
WHERE phone.user_id = ?`;

const [phonebook] = await connection.execute(query, [userId]);
  return serialize(phonebook, userId);
};

module.exports = list;
