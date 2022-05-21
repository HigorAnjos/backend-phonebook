const connection = require('../connection');

const find = async (use_id) => {
  const query = 'SELECT * FROM model_phonebook.phonebook WHERE id = ?';

  const [ phonebook ] = await connection.execute(query, [use_id]);

  return phonebook;
}