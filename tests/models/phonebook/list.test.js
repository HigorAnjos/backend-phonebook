const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../models/connection');
const { execute } = require('../../../models/connection');
const models = requie('../../models/phonebook/index');

decribet(('Listar numeros do user ID 1'), async () => {
  const DB_RESP = {
    id: 1,
    phonebook:
    [
        {
            "name": "alguem",
            "number": "+380967891234"
        },
    ]
  }

  before(() => {
    sinon.stub('connection', execute).resolves(DB_RESP);
  });

  after(() => {
    connection.execute.restore();
  });

  it ('Deve retornar um objeto com a chave id igual a 1', async () => {
    const user_id = 1;
    const expected = DB_RESP.id;
    const result = await models.list(user_id);
    expect(result.id).toEqual(expected);
  });

  it ('Deve retornar um objeto com a chave phonebook igual a [{name: "alguem", number: "+380967891234"}]', async () => {
    const user_id = 1;
    const expected = DB_RESP.phonebook;
    const result = await models.list(user_id);
    expect(result.phonebook).toEqual(expected);
  }

})