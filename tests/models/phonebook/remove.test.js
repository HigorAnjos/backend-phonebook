const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const models = require('../../../models/phonebook/index');

describe('Testando models remove quando sucesso', () => {
  const userId = 1;
  const phoneId = 5;
  const affectedRows = 1;
  const DB_MOC = [{ affectedRows }];

  before(() => {
    sinon.stub(connection, 'execute').resolves(DB_MOC);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Deve retornar um number affectedrows', async () => {
    const result = await models.remove(userId, phoneId);
    expect(result).to.be.equal(affectedRows);
  });
});
