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

describe('Rota Phonebook update', () => {

  it('E possivel deletar um contato com sucesso', async () => {

    const user = {
      email: "george@gmail.com",
      password: "1234",
    };

    const contactUpdate = {
      name: 'higor anjos',
      phone: '+5511985145589'
    }

    const { body: { token } } = await request.post('/user/login').send(user);

    const response = await request.put('/phonebook/update/5').set('authorization', token).send(contactUpdate);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');

    const responseFind = await request.get('/phonebook/find/5').set('authorization', token);

    expect(responseFind.status).toBe(200);
    expect(responseFind.body.contact.name).toBe(contactUpdate.name);
  });
});
