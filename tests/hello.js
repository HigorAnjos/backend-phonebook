const request = require("supertest")
const app = require('../server')
const { expect } = require('chai');

describe('Deve responder Hello World', () => {
  it('hello word', async () => {
    // Subir o servidor
    const res = await request(app).get('/');

    expect(res.body.message).to.be.equal("Hello World")
  })
});
