const models = require('../../../models/user');
const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');

describe('Testando models find user', () => {
  const DB_MOC = [[{
      id: 1,
      name: 'George',
      email: 'george@gmail.com',
      password: '1234'
    }]];

  before(() => {
    sinon.stub(connection, 'execute').resolves(DB_MOC);
  });

  after(() => {
    connection.execute.restore();
  });

  it('Deve retornar um usuário', async () => {
    const email = 'george@gmail.com';
    const password = '1234';

    const user = await models.find(email, password);

    expect(user).to.be.an('array');
    expect(user).to.be.deep.equal(DB_MOC[0]);
    expect(user[0]).to.be.deep.a('object');
    expect(user[0]).to.have.property('email', email);
    expect(user[0]).to.have.property('password', password);
  });
});
