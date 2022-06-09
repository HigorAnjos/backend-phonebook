const supertest = require("supertest");
const mysql = require("mysql2/promise");
const restoreDb = require("../../restoreDb");
const server = require("../../../server");
const request = supertest(server);
require("dotenv").config();

describe('Verificar o login da rota user', () => {
  let connection;

  beforeEach(async () => {
    const {  DB_USER, DB_PASS, DB_HOST } = process.env;

    connection = mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASS,
    });

    await restoreDb();
  });

  afterEach(async () => {
    const {  DB_NAME } = process.env;
    await connection.execute(`DROP DATABASE ${ DB_NAME }`);
    await connection.end();
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
