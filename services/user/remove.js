const models = require('../../models/user/index');

const remove = (userId) => models.remove(userId); // retona uma promisse
// retorna affectedRows 1 ou 0

module.exports = remove;
