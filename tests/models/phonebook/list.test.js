const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const models = require('../../../models/phonebook/index');

describe('Testando models list quando sucesso', () => {
  const DB_MOC = [[{id: 5, name: 'Nome', number: '+380967891234'}]];
  const userId = 1;

  before(() => {
    sinon.stub(connection, 'execute').resolves(DB_MOC);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Deve retornar um Objeto com chaves userId e phonebook array de objetos', async () => {
    const expected = {
      userId,
      phonebook: [{id: 5, name: 'Nome', number: '+380967891234'}]
    };
    const result = await models.list(userId);

    expect(result.phonebook).to.be.a('array');
    expect(result).to.be.a('object');
    expect(result.phonebook[0]).to.be.a('object');
    expect(result).to.be.eql(expected);
    expect(result).to.have.property('userId');
    expect(result).to.have.property('phonebook');
    expect(result).to.be.deep.equal(expected);
  });
});
