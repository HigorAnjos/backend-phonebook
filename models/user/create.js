const connection = require('../connection');

const create = async (name, email, password) => {
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';

  const [{ id: insertId }] = await connection.query(query, [name, email, password]);

  return insertId;
};

module.exports = create;
