const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const models = require('../../../models/phonebook/index');

describe('Testando models find quando sucesso', () => {
  const userId = 1;
  const phoneId = 5;
  const DB_MOC = [[{id: 5, name: 'Nome', number: '+380967891234', user_id: userId}]];

  before(() => {
    sinon.stub(connection, 'execute').resolves(DB_MOC);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Deve retornar um Objeto com chaves userId e contact um objeto', async () => {
    const expected = {
      userId,
      contact: {id: 5, name: 'Nome', phone: '+380967891234'}
    };
    const result = await models.find(userId, phoneId);

    expect(result.contact).to.be.a('object');
    expect(result).to.be.a('object');
    expect(result).to.have.property('userId');
    expect(result).to.have.property('contact');
    expect(result).to.be.deep.equal(expected);
  });
});
