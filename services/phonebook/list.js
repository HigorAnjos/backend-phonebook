const model = require('../../models/phonebook/index');

const list = (id) => model.list(id);

module.exports = list;
