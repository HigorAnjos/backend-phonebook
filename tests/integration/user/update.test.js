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

describe('Rota user update', () => {

    it('E possivel atualizar um usuario com sucesso e logar apos dados atualizados', async () => {

      const userLogin = {
        email: "george@gmail.com",
        password: "1234",
      };

      const userUpdate = {
        name: 'higor anjos',
        email: 'higorc.anjos@gmail.com',
        password: '1234',
      }

      const { body: { token } } = await request.post('/user').send(userLogin);

      const response = await request.put('/user/update/').set('authorization', token).send(userUpdate);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Usuário atualizado com sucesso');

      const userUpdated = {
        email: 'higorc.anjos@gmail.com',
        password: '1234',
      }

      const res = await request.post('/user').send(userUpdated);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
    });

    it('Nao deve ser possivel atulizar para um email ja cadastrado', async () => {

      const userLogin = {
        email: "frank@gmail.com",
        password: "1234",
      };

      const userUpdate = {
        name: 'higor anjos',
        email: 'Julio@gmail.com',
        password: '1234',
      };

      const { body: { token } } = await request.post('/user').send(userLogin);

      const response = await request.put('/user/update/').set('authorization', token).send(userUpdate);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Não foi possivel atualizar o usuário');
    });

    it('Nao deve ser possivel atulizar sem informar o email', async () => {
      const userLogin = {
        email: "frank@gmail.com",
        password: "1234",
      };

      const userUpdate = {
        name: 'higor anjos',
        password: '1234',
      };

      const { body: { token } } = await request.post('/user').send(userLogin);

      const response = await request.put('/user/update/').set('authorization', token).send(userUpdate);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Dados incompletos para atualizar');
    });
});
