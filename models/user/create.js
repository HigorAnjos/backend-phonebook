const connection = require('../connection');

const create = async (name, email, password) => {
  const query = 'INSERT INTO model_phonebook.user (name, email, password) VALUES (?, ?, ?)';

  const [{ insertId }] = await connection.execute(query, [name, email, password]);

  return insertId;
};

module.exports = create;
