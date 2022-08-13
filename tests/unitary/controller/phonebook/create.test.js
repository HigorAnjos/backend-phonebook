const services = require('../../../../services/phonebook');
const controller = require('../../../../controller/phonebook');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando controller create quando sucesso',() => {
  const req = {};
  const res = {};
  const MOC = 5;

  before(() => {
    req.body = {
      name: 'pablo',
      phone: '+38094654651'
    };
    req.user = {
      id: 1
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'create').resolves(MOC);
  });

  after(() => {
    services.create.restore();
  });

  it('Deve responder corretamente o status 201, e json com objeto { id:5 }', async () => {
    await controller.create(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(201);
    expect(res.json.calledWith({ id: MOC })).to.be.true;
  });
});

describe('Testando controller create quando nao sucesso', () => {
  const req = {};
  const res = {};
  const MOC = null;

  before(() => {
    req.body = {
      name: 'pablo',
      phone: '+38094654651'
    };
    req.user = {
      id: 1
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'create').resolves(MOC);
  });

  after(() => {
    services.create.restore();
  });

  it('Deve responder corretamente o status 400, e json com objeto { error: "Não foi possivel cadastrar o numero" }', async () => {
    await controller.create(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(400);
    expect(res.json.calledWith({ message: 'Não foi possivel cadastrar o numero' })).to.be.true;
  });
});
