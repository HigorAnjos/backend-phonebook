const { expect } = require('chai');
const sinon = require('sinon');
const models = require('../../../../models/phonebook/index');

describe('Testando models create quando sucesso', () => {
  const userId = 1;
  const insertId = 5;
  const name = 'Nome';
  const phone = '+380967891234';
  const DB_MOC = [{ insertId }];

  before(() => {
    sinon.stub(connection, 'execute').resolves(DB_MOC);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Deve retornar um isertId', async () => {
    const result = await models.create(name, phone, userId);
    expect(result).to.be.equal(insertId);
  });
});

