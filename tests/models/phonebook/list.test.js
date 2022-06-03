const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const models = require('../../../models/phonebook/index');

describe(('Listar numeros do user ID 1'), function () {
  const DB_MOC = [{
    name: 'alguem',
    number: '+380967891234',
  }];

  before(function () {
    sinon.stub(connection, 'execute').resolves([DB_MOC]);
  });

  after(function () {
    connection.execute.restore();
  });

  it('Deve retornar um objeto com a chave id igual a 1', async function () {
    const user_id = 1;
    const expected = user_id;
    const result = await models.list(user_id);
    expect(result.id).to.be.equal(expected);
  });

  it('Deve retornar um objeto com a chave phonebook igual a [{name: "alguem", number: "+380967891234"}]', async function () {
    const user_id = 1;
    const expected = DB_MOC;
    const result = await models.list(user_id);
    expect(result.phonebook).to.be.equal(expected);
  });
});