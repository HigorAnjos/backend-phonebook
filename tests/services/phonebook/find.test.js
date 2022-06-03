const models = require('../../../models/phonebook/index');
const services = require('../../../services/phonebook')
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando services find quando sucesso', () => {
  const contactFound = {
    userId: 1,
    contact: {
      id: 1,
      name: 'Nome',
      phone: '99999999',
    }
  };
  before(() => {
    sinon.stub(models, 'find').resolves(contactFound);
  });

  after(() => {
    models.find.restore();
  });

  it('Deve retornar o registro encontrado', async () => {
    const userId = 1;
    const phoneId = 1;

    const result = await services.find(userId, phoneId);

    expect(result).to.be.deep.equal(contactFound);
  });
});

describe('Testando services find quando falha', () => {
  before(() => {
    sinon.stub(models, 'find').resolves(null);
  });

  after(() => {
    models.find.restore();
  });

  it('Deve retornar null', async () => {
    const userId = 1;
    const phoneId = 1;

    const result = await services.find(userId, phoneId);

    expect(result).to.be.equal(null);
  });
});
