const model = require('../../models/user');

const create = async (name, email, password) => {
  const user = await model.create(name, email, password);
  if(!user) {
    return null;
  }
  return user;
}

module.exports = create;
