const connection = require('../connection');

const update = async (userId, name, phone, phoneId) => {
  const query = 'UPDATE phonebook SET name = $1, number = $2 WHERE id = $3 AND users_id = $4 RETURNING *';

  const [{ id }] = await connection.query(query, [name, phone, phoneId, userId]);

  return id;
};

module.exports = update;
