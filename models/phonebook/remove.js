const connection = require('..connection/');

const remove = async (phone_id) => {
  const query = 'DELETE FROM model_phonebook.phonebook WHERE id = ?';

  const [ phonebook ] = await connection.execute(query, [phone_id]);

  return phonebook;
}