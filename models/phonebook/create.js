const connection = require('../connection');

const create = async (name, phone_number, use_id) => {
  const query = 'INSERT INTO model_phonebook.phonebook (name, phone, use_id) VALUES (?, ?, ?)';

  const [ phonebook ] = await connection.execute(query, [name, phone, use_id]);

  return phonebook;
}