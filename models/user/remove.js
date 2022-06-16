const { Users } = require('../../database/models');

const remove = (userId) => Users.destroy({ where: { id: userId } }); // retona uma promisse
// retorna affectedRows 1 ou 0
module.exports = remove;
