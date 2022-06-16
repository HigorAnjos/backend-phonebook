const model = require('../../models/phonebook/index');

const remove = (userId, phoneId) => model.remove(userId, phoneId);

module.exports = remove;
