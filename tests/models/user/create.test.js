const models = require('../../../models/user');
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');

describe('Testando models create quando sucesso', () => {
  const insertId = 1;
  const DB_MOC = [{ insertId }];

  before(() => {
    sinon.stub(connection, 'execute').resolves(DB_MOC);
  });

  after(() => {
    connection.execute.restore();
  });


  it('Deve retornar inserId', async () => {
    const name = 'George';
    const email = 'george@gmail.com';
    const password = '1234';

    const newUserId = await models.create(name, email, password);

    expect(newUserId).to.be.equal(insertId);
  });
});
