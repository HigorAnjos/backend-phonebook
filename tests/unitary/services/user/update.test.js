const sinon = require('sinon');
const { expect } = require('chai');
const services = require('../../../../services/user');
const models = require('../../../../models/user');

describe('Testando services user update quando sucesso', () => {
  const MOC = {
    dataValues: { id: 1, name: 'George', email: 'george@gmail.com', password: '1234' }
  };

  before(() => {
    sinon.stub(models, 'find').resolves(MOC);
    sinon.stub(models, 'update').resolves(1);
  });

  after(() => {
    models.find.restore();
    models.update.restore();
  });

  it('Deve retornar o quantidade de linhas afetadas', async () => {
    const name = 'George';
    const email = 'george@gmail.com';
    const password = '1234';
    const userId = 1;

    const result = await services.update(name, email, password, userId);

    expect(result).to.be.deep.equal(1);
  });
});
