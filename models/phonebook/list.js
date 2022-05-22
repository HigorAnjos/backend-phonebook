const connection = require('../connection');

const factory = (phonebook, user_id) => {
	return {
		id: user_id,
		phonebook: phonebook, /// [{"name": "alguem","number": "+380967891234"}, {}, {}]
	}
}

const list = async (user_id) => {
	const query = `SELECT phone.name, phone.number
	FROM model_phonebook.phonebook as phone
	INNER JOIN model_phonebook.user as user ON user.id = phone.user_id
	WHERE phone.user_id = ?`;

	const [ phonebook ] = await connection.execute(query, [user_id]);

	console.log("Apos", phonebook);
  return factory(phonebook, user_id);
}

module.exports = list;
