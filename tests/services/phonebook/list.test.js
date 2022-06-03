const models = require('../../../models/phonebook')
const services = require('../../../services/phonebook')
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando services list quando sucesso', () => {
  const phonebookList = {
    userId: 1,
    phonebook: [{
      id: 1,
      name: 'Nome',
      phone: '+38094654651',
    }]
  };

  before(() => {
    sinon.stub(models, 'list').resolves(phonebookList);
  });

  after(() => {
    models.list.restore();
  });

  it('Deve retornar o registro encontrado', async () => {
    const userId = 1;

    const result = await services.list(userId);

    expect(result).to.be.deep.equal(phonebookList);
    expect(result).to.be.a('object');
  });
});
