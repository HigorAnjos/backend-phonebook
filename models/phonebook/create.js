const connection = require('../connection');

const create = async (name, phone, userId) => {
  const query = 'INSERT INTO phonebook (name, number, users_id) VALUES ($1, $2, $3) RETURNING *';

  const [{ id: insertId }] = await connection.query(query, [name, phone, userId]);

  return insertId;
};

create('John', '+380979797979', 1).then(console.log);

module.exports = create;
