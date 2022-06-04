const sinon = require('sinon');
const { expect } = require('chai');
const services = require('../../../services/user');
const models = require('../../../models/user');

describe('Testando o serviço de login quando sucesso', () => {
  const MOC = [{ id: 1, name: 'George', email: 'george@gmail.com', password: '1234' }];
  before(() => {
    sinon.stub(models, 'find').returns(MOC);
  });

  after(() => {
    models.find.restore();
  });

  it('Deve retornar o usuário', async () => {
    const email = 'george@gmail.com';
    const password = '1234';

    const result = await services.login(email, password);

    expect(result).to.be.equal(MOC[0]);
  });
});

describe('Testando o serviço de login quando erro', () => {
  const MOC = [];

  before(() => {
    sinon.stub(models, 'find').returns(MOC);
  });

  after(() => {
    models.find.restore();
  });

  it('Deve retornar null', async () => {
    const email = 'test@gmail.com';
    const password = '1234';

    const result = await services.login(email, password);

    expect(result).to.be.equal(null);
  });
});
