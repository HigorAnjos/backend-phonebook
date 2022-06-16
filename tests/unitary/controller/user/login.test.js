const sinon = require('sinon');
const { expect } = require('chai');
const controller = require('../../../../controller/user');
const services = require('../../../../services/user');

describe('Testando controller user create quando sucesso', () => {
  const MOC = { id: 1, name: 'George', email: 'george@gmail.com', password: '1234' };
  before(() => {
    sinon.stub(services, 'login').returns(MOC);
  });
})
