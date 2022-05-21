const connection = require('../connection');

const list = async (use_id) => {
	const query = 'SELECT * FROM model_phonebook.user WHERE id = ?';

	const [ phonebook ] = await connection.execute(query, [use_id]);

  return phonebook;
}

module.exports = list;
