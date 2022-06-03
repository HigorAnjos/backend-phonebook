const connection = require('../connection');

const find = async (userId) => {
  const query = 'SELECT * FROM model_phonebook.phonebook WHERE id = ?';

  const [[ userFound ]] = await connection.execute(query, [userId]);

  return userFound;
}

module.exports = find;
