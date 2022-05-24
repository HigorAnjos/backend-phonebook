const { expect } = require('chai');
const sinon = require('sinon');
const jwt = require('jsonwebtoken');

const auth = require('../../middlewares/auth');


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

  it('Quando authorization nao informado status code deve ser 401', () => {
    auth(request, response); 

    expect(response.status.calledWith(401)).to.be.equal(true);
  })
  it('Quando authorization nao informado deve retornar objeto json { erro: Token não informado }', () => {
    auth(request, response); 

    expect(response.json.calledWith({ error: 'Token não informado' })).to.be.equal(true);
  })
});

describe('Requisicao decoded corretamente', () => { 
  const response = {};
  const request = {};
  let next;
  const decoded = {
    data: {
      name: 'higor',
      id: 1,
    }
  }

  before(() => {
    request.headers = {
      authorization: 'token'
    };

    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
    
    next = sinon.stub().returns();
    
    sinon.stub(jwt, 'verify').returns(decoded);
  })

  after(() => {
    jwt.verify.restore();
  })
  
  it ('requisicao deve ter a chave user: {id: 1, userName: "higor" }', () => {
    auth(request, response, next);
    
    expect(request.user).to.be.deep.equal({id: 1, userName: 'higor'})
  })

  it('Deve chama next', () => {
    auth(request, response, next);
    
    expect(next.calledWith()).to.be.equal(true); // deveria parar a funcao
  })
})


describe('Error na decoded ', () => { 
  const response = {};
  const request = {};
  let next;

  before(() => {
    request.headers = {
      authorization: 'token'
    };

    response.status = sinon.stub().returns(response);

    response.json = sinon.stub().returns();
    
    next = sinon.stub().returns();
    
    sinon.stub(jwt, 'verify').throws(new Error("some fake error"));
  })

  after(() => {
    jwt.verify.restore();
  })

  it('A requisicao deve lancar um erro com a mensagem "some fake error"', () => {
    auth(request, response, next);

    expect(jwt.verify).to.throw("some fake error");
  })
  
  it ('A requisicao deve retornar status 400', () => {
    auth(request, response, next);
    
    expect(response.status.calledWith(400)).to.be.equal(true);
  })

  it('A requisicao deve retornar a resposta { message: "Token inválido", error: some fake error }', () => {
    auth(request, response, next);

    expect(response.json.calledWith({ message: 'Token inválido', error: 'some fake error' }))
    .to.be.deep.equal(true); // deveria parar a funcao
  })
})
