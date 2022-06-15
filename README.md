# backend-phonebook


<details close>
  <summary>:point_right: Crie um novo usuario endpoint `POST /user/create` .</summary>

- O endpoint deve ser acessível através do caminho (`/user/create`);

  <br>
  - A requisicao deve conter o seguinte `body`:

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
        "id": 5,
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "error": "Erro ao cria usuário" }
    ```
</details>
<br>

[backend Heroko](https://aqueous-hollows-23591.herokuapp.com/)
