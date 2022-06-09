const connection = require('../connection');

const find = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';

  const user = await connection.query(query, [email]);

  return user;
};

module.exports = find;
