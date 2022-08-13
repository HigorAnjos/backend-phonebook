const services = require('../../../../services/phonebook');
const controller = require('../../../../controller/phonebook');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testando controller update quando sucesso', () => {
  const req = {};
  const res = {};
  const MOC = 1;

  before(() => {
    req.params = {
      id: 5
    };
    req.body = {
      name: 'teste',
      phone: 'teste'
    };
    req.user = {
      id: 1
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'update').resolves(MOC);
  });

  after(() => {
    services.update.restore();
  });

  it('Deve responder corretamente o status 200, e json', async () => {
    await controller.update(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(200);
    expect(res.json.calledWith({ message: 'Numero atualizado com sucesso' })).to.be.true;
  });
});

describe('Testando controller update quando falha', () => {
  const req = {};
  const res = {};
  const MOC = 0;

  before(() => {
    req.params = {
      id: 5
    };
    req.body = {
      name: 'teste',
      phone: 'teste'
    };
    req.user = {
      id: 1
    };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'update').resolves(MOC);
  });

  after(() => {
    services.update.restore();
  });

  it('Deve responder corretamente o status 400, e json', async () => {
    await controller.update(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(400);
    expect(res.json.calledWith({ message: 'Não foi possivel atualizar o numero' })).to.be.true;
  });
});
