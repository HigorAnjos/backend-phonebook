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

  > :heavy_check_mark: Caso sucesso retornara o id deste usuario.
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
  <summary>:point_right: Crie um novo contato endpoint.</summary>
  <br>

- O endpoint deve ser acessível através do caminho (`/phonebook/create`);

  - A requisicao `POST /phonebook/create` deve conter o seguinte `headers` com o token de login:

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

[backend Heroko](https://aqueous-hollows-23591.herokuapp.com/)
