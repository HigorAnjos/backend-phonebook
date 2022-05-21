const connection = require('..connection/');

const remove = async (phone_id, user_id) => {
  const query = 'DELETE FROM model_phonebook.phonebook WHERE id = ? AND user_id = ?';

  const [ phonebook ] = await connection.execute(query, [phone_id, user_id]);

  return phonebook;
}

module.exports = remove;
