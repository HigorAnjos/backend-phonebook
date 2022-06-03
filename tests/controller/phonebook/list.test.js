const phoneController = require('../../../controller/phonebook/');
const services = require('../../../services/phonebook');
const sinon = require('sinon');
const { expect } = require('chai');

describe.only('Testando rota de listar', () => {
  const req = {};
  const res = {};

  before(() =>{
    req.user = { id: 1 };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'list').resolves([]);
  })

  after(() => {
    services.list.restore();
  })

  it('Deve reposnder com status 200 quando sucesso', async () => {
    await phoneController.list(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(200);
  });

  it('Deve retornar um array', async () => {
    await phoneController.list(req, res);

    expect(res.json.calledWith([])).to.be.true;
  })
})
