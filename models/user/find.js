const connection = require('../connection');

const find = async (email, password) => {
  const query = 'SELECT * FROM model_phonebook.user WHERE email = ? AND password = ?';

  const [user] = await connection.execute(query, [email, password]);

  return user;
};

module.exports = find;
