const connection = require('../connection');

const update = async (userId, name, phone, phoneId) => {
  const query = 'UPDATE model_phonebook.phonebook SET name = ?, number = ? WHERE id = ? AND user_id = ?';

  const [{ affectedRows }] = await connection.execute(query, [name, phone, phoneId, userId]);

  return affectedRows;
}

module.exports = update;
