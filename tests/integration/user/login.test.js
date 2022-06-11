const supertest = require("supertest");
const shell = require('shelljs');
// const mysql = require("mysql2/promise");
const server = require("../../../server");
const request = supertest(server);
require("dotenv").config();

const { sequelize: sequelizeCli } = require('../assets/constants');

describe('Verificar o login da rota user', () => {

  beforeEach(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate,
      sequelizeCli.seed
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Deve retornar um token de acesso', async () => {
    const body = {
      email: "george@gmail.com",
      password: "1234",
    };

    const response = await request.post("/user/").send(body);

    expect(response.status).toBe(200);
  });
});
