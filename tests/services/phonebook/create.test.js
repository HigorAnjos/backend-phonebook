const models = require('../../../models/phonebook')
const services = require('../../../services/phonebook')
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando services create quando sucesso', () => {
  const insertId = 1;
  before(() => {
    sinon.stub(models, 'create').resolves(insertId);
  });

  after(() => {
    models.create.restore();
  });

  it('Deve retornar o id do registro inserido', async () => {
    const name = 'Nome';
    const phone = '99999999';
    const user_id = 1;

    const result = await services.create(name, phone, user_id);

    expect(result).to.be.equal(insertId);
  });
});

