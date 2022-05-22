const connection = require('../connection');

const create = async (name, phone, use_id) => {
  const query = 'INSERT INTO model_phonebook.phonebook (name, phone, use_id) VALUES (?, ?, ?)';

  const [ phonebook ] = await connection.execute(query, [name, phone, use_id]);
  
  console.log("Aposta cadatro", phonebook);
  return phonebook;
}

module.exports = create;
