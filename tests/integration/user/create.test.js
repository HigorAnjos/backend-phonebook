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

describe('Rota user create', () => {

  it('E possivel criar um usuario com sucesso', async () => {
    const newUser = {
      name: 'higor anjos',
      email: 'higorc.anjos@gmail.com',
      password: '123456'
    }

    const response = await request.post('/user/create').send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Nao deve ser possivel criar um usuario sem email', async () => {
    const newUser = {
      name: 'higor anjos',
      password: '123456'
    }

    console.log("BODY*************")

    const response = await request.post('/user/create').send(newUser);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });

  it('Nao deve ser possivel criar um usuario sem nome', async () => {
    const newUser = {
      email: 'higorc.anjos@gmail.com',
      password: '123456'
    }
    const response = await request.post('/user/create').send(newUser);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });

  it('Nao deve ser possivel criar um usuario sem senha', async () => {
    const newUser = {
      name: 'higor anjos',
      email: 'higorc.anjos@gmail.com',
    }

    const response = await request.post('/user/create').send(newUser);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });

  it('Nao deve ser possivel criar um usuario com email ja cadastrado', async () => {
    const newUser = {
      name: 'higor anjos',
      email: 'higorc.anjos@gmail.com'
    }

    const response = await request.post('/user/create').send(newUser);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
  });
});
