const connection = require('../connection');

const create = async (name, phone, userId) => {
  const query = 'INSERT INTO model_phonebook.phonebook (name, phone, use_id) VALUES (?, ?, ?)';

  const [ phonebook ] = await connection.execute(query, [name, phone, userId]);
  
  console.log("Aposta cadatro", phonebook);
  return phonebook;
}

create('Higor', '99999999', 1).then(console.log);

module.exports = create;
