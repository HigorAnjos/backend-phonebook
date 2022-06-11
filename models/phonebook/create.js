const { Phonebook } = require('../../database/models');

// const create = async (name, phone, userId) => {
//   const query = 'INSERT INTO model_phonebook.phonebook (name, number, user_id) VALUES (?, ?, ?)';

//   const [{ insertId }] = await connection.execute(query, [name, phone, userId]);

//   return insertId;
// };

const create = async (name, phone, userId) => {
  const { id } = await Phonebook.create({ name, phone, user_id: userId });

  return id;
};

module.exports = create;
