const sinon = require('sinon');
const bcrypt = require('bcrypt');
const { expect } = require('chai');
const controller = require('../../../../controller/user');
const services = require('../../../../services/user');

describe.only('Testando user controller create quando sucesso',() => {
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

  it('Deve responder corretamente o status 201, e json com objeto { id:5 }', async () => {
    await controller.create(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.status.args[0][0]).to.be.equal(201);
    expect(res.json.calledWith({ id: newUserId })).to.be.true;
  });
});
