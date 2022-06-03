const connection = require('../connection');

const create = async (name, phone, userId) => {
  const query = 'INSERT INTO model_phonebook.phonebook (name, number, user_id) VALUES (?, ?, ?)';

  const [{ insertId }] = await connection.execute(query, [name, phone, userId]);
  
  return insertId;
}

create('Higor', '99999999', 1).then(console.log);

module.exports = create;
