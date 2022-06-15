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

describe('Rota Phonebook create', () => {

  it('E possivel criar um novo contato com sucesso', async () => {
    const newContact =     {
      name: 'higor anjos',
      phone: '+5511985145589'
    }

    const user = {
      email: "george@gmail.com",
      password: "1234",
    };

    const { body: { token } } = await request.post('/user').send(user);

    const response = await request.post('/phonebook/create').set('authorization', token).send(newContact);

    console.log('response.body', response.body);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });
});
