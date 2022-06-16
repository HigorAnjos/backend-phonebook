const model = require('../../models/phonebook');

const create = (name, phone, userId) => model.create(name, phone, userId);

module.exports = create;
