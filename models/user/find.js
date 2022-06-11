const { Users } = require('../../database/models');

const find = (email) => Users.findOne({ where: { email } });

module.exports = find;
