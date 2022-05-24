const { expect } = require('chai');
const sinon = require('sinon');

const auth = require('../../middlewares/auth')

describe('Rota phonebook Nao deve permitir acesso sem autorizacao a rota list', () => {
  const response = {};
  const request = {};

  before(() => {
    request.headers = {};

    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
  })

  it('Quando authorization nao informado status code deve ser 401', async () => {
    await auth(request, response); 

    expect(response.status.calledWith(401)).to.be.equal(true);
  })
  it('Quando authorization nao informado deve retornar objeto json { erro: Token não informado }', async () => {
    await auth(request, response); 

    expect(response.json.calledWith({ error: 'Token não informado' })).to.be.equal(true);
  })
});
