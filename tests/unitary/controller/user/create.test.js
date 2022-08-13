const sinon = require('sinon');
const bcrypt = require('bcrypt');
const { expect } = require('chai');
const controller = require('../../../../controller/user');
const services = require('../../../../services/user');

describe('Testando user controller create quando sucesso',() => {
  const req = {};
  const res = {};
  const newUserId = 5;

  before(() => {
    req.body = {
      name: 'pablo',
      email: 'pablo@gmail.com',
      password: '1234',
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(bcrypt, 'hash').resolves('ok');
    sinon.stub(services, 'create').resolves(newUserId);
  });

  after(() => {
    sinon.restore();
  });

  it('Deve responder corretamente o status 201, e json com objeto { id }', async () => {
    await controller.create(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(201);
    expect(res.json.calledWith({ id: newUserId })).to.be.true;
  });
});

describe('Testando user controller create quando erro', () => {
  const req = {};
  const res = {};

  before(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(bcrypt, 'hash').resolves('encrypted');
    sinon.stub(services, 'create').resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  it('Deve responder corretamente o status 400, e json com objeto { message }, quando dados incompletos', async () => {
    req.body = {
      name: 'pablo',
      email: 'pablo@gmail.com',
    };

    await controller.create(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(400);
    expect(res.json.calledWith({ message: 'Dados incompletos' })).to.be.true;
  });

  it('Deve responder corretamente o status 400, e json com objeto { message }, quando erro ao criar usuário', async () => {
    req.body = {
      name: 'pablo',
      email: 'pablo@gmail.com',
      password: '1234',
    };

    await controller.create(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(400);
    expect(res.json.calledWith({ message: 'Erro ao criar usuário' })).to.be.true;
  });
})
