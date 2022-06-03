const connection = require('../connection');

const serialize = (phonebook, user_id) => {
	return {
		id: user_id,
		phonebook, /// [{name: 'alguem', number: '+380967891234'}, {}, {}]
	}
}

const list = async (userId) => {
	const query = `SELECT phone.name, phone.number
	FROM model_phonebook.phonebook as phone
	INNER JOIN model_phonebook.user as user ON user.id = phone.user_id
	WHERE phone.user_id = ?`;

	const [ phonebook ] = await connection.execute(query, [userId]);
  return serialize(phonebook, userId);
}

list(1).then(console.log);

module.exports = list;
