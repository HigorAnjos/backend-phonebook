const sinon = require('sinon');
const { expect } = require('chai');
const services = require('../../../../services/user');
const models = require('../../../../models/user');
const bcrypt = require('bcrypt');
const { afterEach } = require('mocha');

describe('Testando o serviço de login quando sucesso', () => {
  const MOC = {
    dataValues: { id: 1, name: 'George', email: 'george@gmail.com', password: '1234' }
  };

  before(() => {
    sinon.stub(models, 'find').resolves(MOC);
    sinon.stub(bcrypt, 'compare').resolves(true);
  });

  after(() => {
    models.find.restore();
    bcrypt.compare.restore();
  });

  it('Deve retornar o usuário', async () => {
    const email = 'george@gmail.com';
    const password = '1234';

    const result = await services.login(email);

    expect(result).to.be.deep.equal(MOC.dataValues);
    expect(result).to.have.property('email', email);
    expect(result).to.have.property('password', password);
  });
});

describe('Testando o serviço de login quando falha', () => {

  afterEach(() => {
    services.find.restore();
    bcrypt.compare.restore();
  });

  it('Deve retornar false caso nao encontre o usuario', async () => {
    const MOC = null;
    const isPasswordCorrect = true;
    sinon.stub(services, 'find').resolves(MOC);
    sinon.stub(bcrypt, 'compare').resolves(isPasswordCorrect);

    const email = 'test@gmail.com';

    const result = await services.login(email);

    expect(result).to.be.equal(false);
  });

  it('Deve retornar false caso a senha esteja incorreta ---', async () => {
    const isPasswordCorrect = false;
    const userFound = true;
    sinon.stub(services, 'find').resolves('userFound');
    sinon.stub(bcrypt, 'compare').resolves(isPasswordCorrect);

    const email = 'test@gmail.com';
    const password = '1234';

    const result = await services.login(email, password);

    expect(result).to.be.equal(false);
  });
});
