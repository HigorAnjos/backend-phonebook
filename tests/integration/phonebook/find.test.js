const supertest = require("supertest");
const shell = require('shelljs');
const server = require("../../../server");
const request = supertest(server);
require("dotenv").config();

const { sequelize: sequelizeCli } = require('../assets/constants');

shell.exec([
  sequelizeCli.drop,
  sequelizeCli.create,
  sequelizeCli.migrate,
  sequelizeCli.seed
].join(' && '),
  { silent: process.env.DEBUG === "false" });

describe('Rota Phonebook find', () => {

  it('E possivel buscar um contato com sucesso', async () => {

    const user = {
      email: "george@gmail.com",
      password: "1234",
    };

    const { body: { token } } = await request.post('/user/login').send(user);

    const response = await request.get('/phonebook/find/5').set('authorization', token);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('userId');
    expect(response.body).toHaveProperty('contact');
    expect(response.body.contact).toHaveProperty('id');
    expect(response.body.contact).toHaveProperty('name');
    expect(response.body.contact).toHaveProperty('phone');
  });
});
