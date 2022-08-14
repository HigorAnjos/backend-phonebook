const sinon = require('sinon');
const { expect } = require('chai');
const controller = require('../../../../controller/user');
const services = require('../../../../services/user');

describe('Testando user controller remove quando sucesso', () => {
  const req = {};
  const res = {};
  const userId = 5;

  before(() => {
    req.user = {
      id: userId,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'remove').resolves(true);
  });

  after(() => {
    sinon.restore();
  });

  it('Deve responder corretamente o status 200, e json com objeto { message }, quando dados incompletos', async () => {
    await controller.remove(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(200);
    expect(res.json.calledWith({ message: 'Usuário removido com sucesso' })).to.be.true;
  });
});

describe('Testando user controller remove quando erro', () => {
  const req = {};
  const res = {};
  const userId = 5;

  before(() => {
    req.user = {
      id: userId,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'remove').resolves(false);
  });

  after(() => {
    sinon.restore();
  });
  
  it('Deve responder corretamente o status 400, e json com objeto { message }, quando nao possivel remover', async () => {
    await controller.remove(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(400);
    expect(res.json.calledWith({ message: 'Não foi possivel remover o usuário' })).to.be.true;
  });
});
