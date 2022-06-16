const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const models = require('../../../models/phonebook/index');

describe('Testando models update quando sucesso', () => {
  const affectedRows = 1;
  const userId = 1;
  const phoneId = 5;
  const name = 'Nome';
  const phone = '+380967891234';
  const DB_MOC = [{ affectedRows }];

  before(() => {
    sinon.stub(connection, 'execute').resolves(DB_MOC);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Deve retornar um number affectedrows', async () => {
    const result = await models.update(userId, name, phone, phoneId);
    expect(result).to.be.equal(affectedRows);
  });
});
