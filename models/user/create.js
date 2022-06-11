const { Users } = require('../../database/models');

// const create = async (name, email, password) => {
//   const query = 'INSERT INTO model_phonebook.user (name, email, password) VALUES (?, ?, ?)';

//   const [{ insertId }] = await connection.execute(query, [name, email, password]);

//   return insertId;
// };

const create = async (name, email, password) => {
 const { id } = await Users.create({ name, email, password });

  return id;
};

module.exports = create;
