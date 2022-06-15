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

describe('Rota Phonebook list', () => {

  it('E possivel listar todos os contatos de um usuario valido', async () => {

    const user = {
      email: "george@gmail.com",
      password: "1234",
    };

    const { body: { token } } = await request.post('/user').send(user);

    const response = await request.get('/phonebook/list').set('authorization', token);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('userId');
    expect(response.body).toHaveProperty('phonebook');
    expect(Array.isArray(response.body.phonebook)).toBe(true);
    expect(response.body.phonebook[0]).toHaveProperty('id');
    expect(response.body.phonebook[0]).toHaveProperty('name');
    expect(response.body.phonebook[0]).toHaveProperty('phone');
    expect(response.body.phonebook[0]).toHaveProperty('user_id');
    expect(response.body.phonebook.length).toBe(9);
  });
});
