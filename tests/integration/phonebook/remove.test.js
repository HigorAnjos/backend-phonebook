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

describe('Rota Phonebook delete', () => {

  it('E possivel deletar um contato com sucesso', async () => {

    const user = {
      email: "george@gmail.com",
      password: "1234",
    };

    const { body: { token } } = await request.post('/user/login').send(user);

    const response = await request.delete('/phonebook/delete/1').set('authorization', token);

    expect(response.status).toBe(200);

    const responseFind = await request.get('/phonebook/find/1').set('authorization', token);

    expect(responseFind.status).toBe(404);
    expect(responseFind.body).toHaveProperty('message');
  });
});
