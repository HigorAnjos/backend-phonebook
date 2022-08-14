const sinon = require('sinon');
const { expect } = require('chai');
const services = require('../../../../services/user');
const models = require('../../../../models/user');

describe('Testando o serviço de find quando sucesso', () => {
  const MOC = {
    dataValues: { id: 1, name: 'George', email: 'george@gmail.com', password: '1234' }
  };

  before(() => {
    sinon.stub(models, 'find').resolves(MOC);
  });

  after(() => {
    models.find.restore();
  });

  it('Deve retornar o usuário', async () => {
    const email = 'george@gmail.com';
    const password = '1234';

    const result = await services.find(email);

    expect(result).to.be.deep.equal(MOC.dataValues);
    expect(result).to.have.property('id', MOC.dataValues.id);
    expect(result).to.have.property('email', email);
    expect(result).to.have.property('password', password);
  });
});

describe('Testando o serviço de find quando falha', () => {

  it('Deve retornar false caso nao encontre o usuario', async () => {
    const MOC = null;
    sinon.stub(models, 'find').resolves(MOC);

    const email = 'george@gmail.com';

    const result = await services.find(email);

    expect(result).to.be.equal(null);

    models.find.restore();
  });
});
