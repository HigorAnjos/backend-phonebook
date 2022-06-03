const connection = require('../connection');

const remove = async (userId, phoneId) => {
  const query = 'DELETE FROM model_phonebook.phonebook WHERE id = ? AND user_id = ?';

  const [{ affectedRows }] = await connection.execute(query, [phoneId, userId]);

  return affectedRows;
};

module.exports = remove;
