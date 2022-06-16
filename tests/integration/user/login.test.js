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

describe('Rota user login', () => {

  it('E possivel logar com sucesso', async () => {

    const user = {
      email: "george@gmail.com",
      password: "1234",
    };

    const response = await request.post("/user/").send(user);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it('Nao deve ser possivel logar com senha incorreta', async () => {

    const user = {
      email: "george@gmail.com",
      password: "123456",
    };

    const response = await request.post("/user/").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });

  it('Nao deve ser possivel logar sem informar email', async () => {

    const user = {
      email: "",
      password: "1234",
    };

    const response = await request.post("/user/").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Dados incompletos");
  });

  it('Nao deve ser possivel logar sem informar senha', async () => {

    const user = {
      email: "higorc.anjos@gmail.com",
      password: "",
    };

    const response = await request.post("/user/").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Dados incompletos");
  });

});
