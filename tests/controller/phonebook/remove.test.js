const services = require('../../../services/phonebook');
const controller = require('../../../controller/phonebook');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando controller remove quando sucesso', () => {
  const req = {};
  const res = {};
  const MOC = 5;

  before(() => {
    req.params = {
      id: 5
    };
    req.user = {
      id: 1
    };
    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();

    sinon.stub(services, 'remove').resolves(MOC);
  });

  after(() => {
    services.remove.restore();
  });

  it('Deve responder corretamente o status 200, e end', async () => {
    await controller.remove(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(200);
    expect(res.end.calledWith()).to.be.true;
  });
});

describe('Testando controller remove quando falha', () => {
  const req = {};
  const res = {};
  const MOC = 0;

  before(() => {
    req.params = {
      id: 5
    };
    req.user = {
      id: 1
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'remove').resolves(MOC);
  });

  after(() => {
    services.remove.restore();
  });

  it('Deve responder corretamente o status 400, e json', async () => {
    await controller.remove(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(400);
    expect(res.json.calledWith({ error: 'Não foi possivel remover o numero' })).to.be.true;
  });
});
