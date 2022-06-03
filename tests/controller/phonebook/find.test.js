const services = require('../../../services/phonebook');
const controller = require('../../../controller/phonebook');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando rota find quando encontra com sucesso', () => {
  const req = {};
  const res = {};
  const contactMoc = {
    userId: 1,
    contact: {
      id: 5,
      name: "pablo",
      phone: "+38094654651"
    }
  };

  before(() => {
    req.params = {
      id: 1,
    };
    req.user = {
      id: 1,
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);

    sinon.stub(services, 'find').resolves(contactMoc);
  });

  after(() => {
    services.find.restore();
  });

  it('Deve responder corretamente o status 200, e objeto', async () => {
    await controller.find(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(200);
    expect(res.json.calledWith(contactMoc)).to.be.true;
  });
});

describe('Testando rota find quando não encontra', () => {
  const req = {};
  const res = {};
  const contactMoc = null;

  before(() => {
    req.params = {
      id: 1,
    };
    req.user = {
      id: 1,
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'find').resolves(contactMoc);
  });

  after(() => {
    services.find.restore();
  });

  it('Deve responder corretamente o status 404, e message: Contato não encontrado', async () => {
    await controller.find(req, res);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(404);
    expect(res.json.calledWith({ message: 'Contato não encontrado' })).to.be.true;
  });
});
