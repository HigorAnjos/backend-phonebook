const connection = require('../connection');

const find = async (name, password) => {
  const query = 'SELECT * FROM model_phonebook.user WHERE name = ? AND password = ?';

  const [ user ] = await connection.execute(query, [name, password]);

  return user;
}

module.exports = find;
