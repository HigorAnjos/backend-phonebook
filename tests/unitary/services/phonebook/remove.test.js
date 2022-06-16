const models = require('../../../../models/phonebook')
const services = require('../../../../services/phonebook')
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando services remove quando sucesso', () => {
  const affectedRows = 1;
  before(() => {
    sinon.stub(models, 'remove').resolves(affectedRows);
  })

  after(() => {
    models.remove.restore();
  });

  it('Deve retornar numero de linha afetadas no banco', async () => {
    const userId = 1;
    const phoneId = 1;

    const result = await services.remove(userId, phoneId);

    expect(result).to.be.equal(1);
    expect(result).to.be.a('number');
  });
});
