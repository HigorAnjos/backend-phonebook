const supertest = require("supertest");
const pgtools = require("pgtools");
const restoreDb = require("../../restoreDb");
const server = require("../../../server");
const request = supertest(server);
require("dotenv").config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

describe('Verificar o login da rota user', () => {
  beforeEach(async () => {
    await restoreDb();
  });

  afterEach(async () => {
    const config = {
      user: "postgres" || DB_USER,
      host: "localhost" || DB_HOST,
      password: "postgres" || DB_PASS,
      port: 5432 || DB_PORT,
    };
    await pgtools.dropdb(config, DB_NAME);
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
