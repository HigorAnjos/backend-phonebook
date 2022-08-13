const sinon = require('sinon');
const { expect } = require('chai');
const services = require('../../../../services/user');
const models = require('../../../../models/user');

describe('Testando a services user create quando sucesso', () => {
  const insertId = 5;
  const MOC = insertId;

  before(() => {
    sinon.stub(models, 'create').returns(MOC);
    sinon.stub(models, 'find').returns(null);
  });

  after(() => {
    models.create.restore();
    models.find.restore();
  });

  it('Deve retornar o insertId criado', async () => {
    const name = 'Teste';
    const email = 'test@gmail.com';
    const password = '123456';

    const result = await services.create(name, email, password);

    expect(result).to.be.equal(insertId);
  });
});

describe('Testando a services user create quando erro', () => {
  const MOC = null;

  before(() => {
    sinon.stub(models, 'create').returns(MOC);
    sinon.stub(models, 'find').returns({ dataValues: true });

  });

  after(() => {
    models.create.restore();
    models.find.restore();
  });

  it('Deve retornar null quando email ja cadastrado', async () => {
    const name = 'Teste';
    const email = 'test@gmail.com';

    const result = await services.create(name, email);

    expect(result).to.be.equal(null);
  });
});
