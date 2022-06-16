const model = require('../../models/phonebook/index');

const update = (userId, name, phone, phoneId) => model.update(userId, name, phone, phoneId);

module.exports = update;
