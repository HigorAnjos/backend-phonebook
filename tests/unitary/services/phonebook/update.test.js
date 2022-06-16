const models = require('../../../../models/phonebook')
const services = require('../../../../services/phonebook')
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando services update quando sucesso', () => {
  const affectedRows = 1;
  before(() => {
    sinon.stub(models, 'update').resolves(affectedRows);
  })

  after(() => {
    models.update.restore();
  });

  it('Deve retornar numero de linha afetadas no banco', async () => {
    const userId = 1;
    const name = 'Nome';
    const phone = '+38094654651';
    const phoneId = 1;

    const result = await services.update(userId, name, phone, phoneId);

    expect(result).to.be.equal(1);
    expect(result).to.be.a('number');
  });
});
