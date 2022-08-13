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

describe('Rota user Delete', () => {

  it('E possivel deletar um usuario com sucesso e apos deletado nao deve ser possivel logar', async () => {

    const userLogin = {
      email: 'george@gmail.com',
      password: '1234',
    };

    const { body: { token } } = await request.post('/user/login').send(userLogin);

    const response = await request.delete('/user/delete/').set('authorization', token);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Usuário removido com sucesso');

    const userDeleted = {
      email: 'george@gmail.com',
      password: '1234',
    };

    const res = await request.post('/user/login').send(userDeleted);

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Senha ou email incorretos');
  });
});
