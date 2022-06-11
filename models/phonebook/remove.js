const { Phonebook } = require('../../database/models');
// const remove = async (userId, phoneId) => {
//   const query = 'DELETE FROM model_phonebook.phonebook WHERE id = ? AND user_id = ?';

//   const [{ affectedRows }] = await connection.execute(query, [phoneId, userId]);

//   return affectedRows;
// };

const remove = (userId, phoneId) => Phonebook.destroy({ where: { id: phoneId, user_id: userId } });

module.exports = remove;
