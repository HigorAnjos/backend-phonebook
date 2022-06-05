const connection = require('../connection');

const remove = async (userId, phoneId) => {
  const query = 'DELETE FROM phonebook WHERE id = $1 AND users_id = $2 RETURNING *';

  const [{ id }] = await connection.query(query, [phoneId, userId]);

  return id;
};

module.exports = remove;
