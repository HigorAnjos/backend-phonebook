# backend-phonebook

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
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGFWYWx1ZXMiOnsiaWQiOjEsIm5hbWUiOiJHZW9yZ2UiLCJlbWFpbCI6Imdlb3JnZUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRhanlSUzV2UjZuWGl0Ui5EREFtTmhPbWFucHEwMDI3WEJTSndqZGkvaTZSMkl2VGZHUXBHbSIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMTVUMDQ6MzY6NDAuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDYtMTVUMDQ6MzY6NDAuMDAwWiJ9LCJfcHJldmlvdXNEYXRhVmFsdWVzIjp7ImlkIjoxLCJuYW1lIjoiR2VvcmdlIiwiZW1haWwiOiJnZW9yZ2VAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkYWp5UlM1dlI2blhpdFIuRERBbU5oT21hbnBxMDAyN1hCU0p3amRpL2k2UjJJdlRmR1FwR20iLCJjcmVhdGVkQXQiOiIyMDIyLTA2LTE1VDA0OjM2OjQwLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIyLTA2LTE1VDA0OjM2OjQwLjAwMFoifSwidW5pcW5vIjoxLCJfY2hhbmdlZCI6e30sIl9vcHRpb25zIjp7ImlzTmV3UmVjb3JkIjpmYWxzZSwiX3NjaGVtYSI6bnVsbCwiX3NjaGVtYURlbGltaXRlciI6IiIsInJhdyI6dHJ1ZSwiYXR0cmlidXRlcyI6WyJpZCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il19LCJpc05ld1JlY29yZCI6ZmFsc2V9LCJpYXQiOjE2NTUyNjg3ODEsImV4cCI6MTY1NTQxMjc4MX0._QVE4db8xfZXbES27WzQuxo49jG9F80971ALJngOXD4"
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "error": "Senha ou email incorretos" }
    ```
</details>

[backend Heroko](https://aqueous-hollows-23591.herokuapp.com/)
