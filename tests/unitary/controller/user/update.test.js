const sinon = require('sinon');
const bcrypt = require('bcrypt');
const { expect } = require('chai');
const controller = require('../../../../controller/user');
const services = require('../../../../services/user');

describe('User controller - update - quando sucesso', () => {
  const req = {};
  const res = {};
  const userId = 5;

  before(() => {
    req.user = {
      id: userId,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'update').resolves(true);
    sinon.stub(bcrypt, 'hash').resolves('hash');
  });

  after(() => {
    sinon.restore();
  });

  it('Deve responder corretamente o status 200, e json com objeto { message }', async () => {
    req.body = { name: 'teste', email: 'test@test.com', password: 'teste' };

    await controller.update(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(200);
    expect(res.json.calledWith({ message: 'Usuário atualizado com sucesso' })).to.be.true;
  });
});

describe('User controller - update - quando erro', () => {
  const req = { body: {} };
  const res = {};
  const userId = 5;

  before(() => {
    req.user = {
      id: userId,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'update').resolves(false);
    sinon.stub(bcrypt, 'hash').resolves('hash');
  });

  after(() => {
    sinon.restore();
  });

  it('Deve responder corretamente o status 400, e json com objeto { message }, quando dado incompletos', async () => {
    await controller.update(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(400);
    expect(res.json.calledWith({ message: 'Dados incompletos para atualizar' })).to.be.true;
  });

  it('Deve responder corretamente o status 400, e json com objeto { message }, quando não foi possivel atualizar', async () => {
    req.body = { name: 'teste', email: 'test@test.com', password: 'teste' };

    await controller.update(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(400);
    expect(res.json.calledWith({ message: 'Não foi possivel atualizar o usuário' })).to.be.true;
  });
});
