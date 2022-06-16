# :fleur_de_lis: backend-phonebook

## `user/`
<details close>
  <summary>:point_right: Crie um novo usuario endpoint.</summary>
  <br>

- O endpoint deve ser acessível através do caminho (`/user/create`);

  - A requisicao `POST /user/create` deve conter o seguinte `body`:

  <br>

  ```json
      {
        "name": "higor anjos",
        "email": "higorc.anjos@gmail.com",
        "password": "123456"
      }
  ```

  > :heavy_check_mark: Caso sucesso retornara o id deste usuario.
  - API deve responder com status http `201` e o seguinte `body`:
    ```json
      {
        "id": 5
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "error": "Erro ao criar usuário" }
    ```
</details>


<details close>
  <summary>:point_right: Login usuario endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/user/`);

  - A requisicao `POST /user/` deve conter o seguinte `body`:

  <br>

  ```json
      {
        "email": "higorc.anjos@gmail.com",
        "password": "123456"
      }
  ```

  > :heavy_check_mark: Caso sucesso retornara o token para este usuario.
  - API deve responder com status http `200` e o seguinte `body`:
    ```json
      {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "error": "Senha ou email incorretos" }
    ```
</details>

<br>

## `phonebook/`

<details close>
  <summary>:point_right: Listar todos os contato endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/phonebook/list`);

  - A requisicao `GET /phonebook/list` deve conter o seguinte `headers` com o token de login:

  <br>

  ```json
    {
      "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  ```

  > :heavy_check_mark: Caso sucesso retornara lista de contatos deste usuario.
  - API deve responder com status http `200` e o seguinte `body`:
    ```json
      {
          "userId": 1,
          "phonebook": [
            {
              "id": 1,
              "name": "alguem",
              "phone": "+380967891234",
              "createdAt": "2022-06-15T04:36:40.000Z",
              "updatedAt": "2022-06-15T04:36:40.000Z",
              "user_id": 1
          },
          {
              "id": 5,
              "name": "pablo",
              "phone": "+38094654651",
              "createdAt": "2022-06-15T04:36:40.000Z",
              "updatedAt": "2022-06-15T04:36:40.000Z",
              "user_id": 1
          }
        ]
      }
    ```

</details>

<details close>
  <summary>:point_right: Crie um novo contato endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/phonebook/create`);

  - A requisicao `POST /phonebook/create` deve conter o seguinte `headers` com o token de login:

  <br>

  ```json
    {
      "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  ```

  - A requisicao `POST /phonebook/create` deve conter o seguinte `body`:

  <br>

  ```json
      {
        "name": "higor anjos",
        "phone": "+5511985145589"
      }
  ```

  > :heavy_check_mark: Caso sucesso retornara o id deste contato.
  - API deve responder com status http `201` e o seguinte `body`:
    ```json
      {
        "id": 5
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "error": "Não foi possivel cadastrar o numero" }
    ```
</details>

<details close>
  <summary>:point_right: Buscar um contato endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/phonebook/find/:id`);

  - A requisicao `GET /phonebook/find/:id` deve conter o seguinte `headers` com o token de login:

  <br>

  ```json
    {
      "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  ```


  > :heavy_check_mark: Caso sucesso retornara o contato.
  - API deve responder com status http `200` e o seguinte `body`:
    ```json
      {
        "userId": 1,
        "contact": {
            "id": 5,
            "name": "pablo",
            "phone": "+38094654651"
          }
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `404` e o seguinte `body`:
    ```json
      { "message": "Contato não encontrado" }
    ```
</details>

<details close>
  <summary>:point_right: Atualizar um contato endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/phonebook/update/:id`);

  - A requisicao `PUT /phonebook/update/:id` deve conter o seguinte `headers` com o token de login:

  <br>

  ```json
    {
      "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  ```
 - A requisicao `PUT /phonebook/update/:id` deve conter o seguinte `body`:

  <br>

  ```json
      {
        "name": "higor anjos Updated",
        "phone": "+5511985145589"
      }
  ```

  > :heavy_check_mark: Caso sucesso.
  - API deve responder com status http `200` e o seguinte `body`:
    ```json
      {
         "message": "Numero atualizado com sucesso"
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "error": "Não foi possivel atualizar o numero" }
    ```
</details>

<details close>
  <summary>:point_right: Remover um contato endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/phonebook/delete/:id`);

  - A requisicao `DELETE /phonebook/delete/:id` deve conter o seguinte `headers` com o token de login:

  <br>

  ```json
    {
      "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  ```

  > :heavy_check_mark: Caso sucesso.
  - API deve responder com status http `200`.

  <br>

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "error": "Não foi possivel remover o numero" }
    ```

</details>

[backend Heroko](https://aqueous-hollows-23591.herokuapp.com/)
