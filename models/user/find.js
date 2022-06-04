const connection = require('../connection');

const find = async (email) => {
  const query = 'SELECT * FROM model_phonebook.user WHERE email = ?';

  const [user] = await connection.execute(query, [email]);

  return user;
};

module.exports = find;
