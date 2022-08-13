const sinon = require('sinon');
const { expect } = require('chai');
const jwt = require('jsonwebtoken');
const controller = require('../../../../controller/user');
const services = require('../../../../services/user');

describe('Testando controller user create quando sucesso', () => {
  const MOC = { id: 1, name: 'George', email: 'george@gmail.com', password: '1234' };
  const req = {};
  const res = {};

  before(() => {
    req.body = {  email: 'george@gmail.com', password: '1234' };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(services, 'login').returns(MOC);
    sinon.stub(jwt, 'sign').returns('token');
  });

  after(() => {
    services.login.restore();
    jwt.sign.restore();
  });

  it('Deve retornar o token do usuário', async () => {
    await controller.login(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith({ token: 'token' })).to.be.true;
  });
});

describe('Testando controller user create quando falha', () => {
  const req = {};
  const res = {};

  before(() => {
    req.body = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

  });

  after(() => {
    sinon.restore();
  });

  it('Deve falhar caso os dados nao estejam completos incompletos', async () => {
    await controller.login(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({ message: 'Dados incompletos' })).to.be.true;
  });
});
