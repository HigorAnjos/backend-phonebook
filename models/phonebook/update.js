const connection = require('../connection');

const update = async (name, phone, use_id, phone_id) => {
  const query = 'UPDATE model_phonebook.phonebook SET name = ?, phone = ? WHERE id = ? AND use_id = ?';

  const [ phonebook ] = await connection.execute(query, [name, phone, phone_id, use_id]);

  return phonebook;
}

module.exports = update;
