<h1 align="center">:fleur_de_lis: backend-phonebook</h1>

<p align="center">Esse projeto e uma API de uma agenda telefonica. :open_book:</p>

<p align="center">
  <a href="#Swagger">Swagger</a> •
  <a href="#Heroku">Heroku</a> •
  <a href="#Node">Node</a> •
  <a href="#Docker-compose">Docker-compose</a> •
  <a href="#Postman">Postman</a> •
  <a href="#Tecnologias">Tecnologias</a> •
  <a href="#Autor">Autor</a>
</p>


## Heroku

O projeto esta disponivel online no
[Heroko :smile:](https://backend-phonebook-2930.herokuapp.com/)

## Swagger

A documentacao da api esta disponivel online
[Swagger :page_with_curl:](https://backend-phonebook-2930.herokuapp.com/docs)


# Node

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

E um banco relacional como MySQL, MariaDB, SQLite, PostgreSQL, Redshift,MSSQL e Snowflake, que sao
suportadas pelo ORM [sequelize](https://sequelize.org/docs/v6/other-topics/dialect-specific-things/)

A conguracao de conexao com o banco devem estar no arquivo ``.env``

Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

## Rodando com Node

```bash
# Clone este repositório
$ git clone git@github.com:HigorAnjos/backend-phonebook.git

# Acesse a pasta do projeto no terminal/cmd
$ cd backend-phonebook

# Instale as dependências
$ npm install

# Popule o banco de dados
$ npm run db:init

# iniciar o projeto
$ npm start
```

A aplicação estara disponivel em ```http://localhost:3001/```

A documentacao estara disponivel em ```http://localhost:3001/docs/```

---

# Docker-Compose

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Docker](https://www.docker.com/), [Docker Compose](https://docs.docker.com/compose/install/).

## Rodando com o doker-compose :whale2:

```bash
# Clone este repositório
$ git clone git@github.com:HigorAnjos/xp-backend.git

# Rodar o docker-compose
$ docker-compose up -d

# Acessar a aplicação docker
$ docker exec -it phonebook_node bash

# Instale as dependências
$ npm install

# Popule o banco de dados
$ npm run db:init

# Rodar o projeto
$ npm start
```

A aplicação estara disponivel em ```http://localhost:3001```

A documentacao estara disponivel em ```http://localhost:3001/docs/```

Parar o container
```bash
$ docker-compose down
```
---


## Postman
Download dos [endpoints](https://github.com/HigorAnjos/backend-phonebook/blob/main/API.postman_collection.json)

## Tecnologias

:hammer_and_wrench: As seguintes ferramentas foram usadas na construção do projeto:

- [Git](https://git-scm.com/)
- [Github Actions :octocat:](https://docs.github.com/pt/actions)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JWT :closed_lock_with_key:](https://jwt.io/)
- [Node](https://nodejs.org/en/)
- [Expressjs](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/pt-BR/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Eslint :lipstick:](https://eslint.org/)
- [Sequelize](https://sequelize.org/docs/v6/getting-started/)
- [Docker-Compose :whale2:](https://docs.docker.com/compose/)
- [Editor Config](https://editorconfig.org/)
- [Nodemoon :crescent_moon:](https://www.npmjs.com/package/nodemon)

Voce pode verificar todas ferramentas no arquivo [package.json](https://github.com/HigorAnjos/backend-phonebook/blob/main/package.json), em dependencies e devDependencies.


# Autor

<img alt="Higor Anjos" title="Higor Anjos" src="https://avatars.githubusercontent.com/u/38214470?v=4" height="100" width="100" />

Made with 💜 by Higor Anjos 👋

[![LinkedIn Badge](https://img.shields.io/badge/-Higor_Anjos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/higoranjos)](https://www.linkedin.com/in/higoranjos)


<!-- antes do swagger  -->

<!-- ## `user/`

<details close>
  <summary>:point_right: Criar um novo usuario endpoint.</summary>
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
      { "message": "Erro ao criar usuário" }
    ```
</details>

<details close>
  <summary>:point_right: Login usuario endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/user/`);

  - A requisicao `POST /user/login` deve conter o seguinte `body`:

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
      { "message": "Senha ou email incorretos" }
    ```
</details>

<details close>
  <summary>:point_right: Atualizar usuario endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/user/update`);

  - A requisicao `PUT /user/update` deve conter o seguinte `headers` com o token de login:

  <br>

  ```json
    {
      "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  ```

  - A requisicao `PUT /user/update` deve conter o seguinte `body`:

  <br>

  ```json
      {
        "name": "higor anjos",
        "email": "higorc.anjos@gmail.com",
        "password": "123456"
      }
  ```

  > :heavy_check_mark: Caso sucesso retornara o token para este usuario.
  - API deve responder com status http `200` e o seguinte `body`:
    ```json
      {
        "message": "Usuário atualizado com sucesso"
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "message": "Não foi possivel atualizar o usuário" }
    ```
</details>

<details close>
  <summary>:point_right: Deletar usuario endpoint.</summary>

  <br>

- O endpoint deve ser acessível através do caminho (`/user/delete`);

  - A requisicao `DELETE /user/delete` deve conter o seguinte `headers` com o token de login:

  <br>

  ```json
    {
      "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
    }
  ```


  > :heavy_check_mark: Caso sucesso retornara o token para este usuario.
  - API deve responder com status http `200` e o seguinte `body`:
    ```json
      {
        "message": "Usuário removido com sucesso"
      }
    ```

  > :x: Por algum motivo nao seja possivel.

  - API deve responder com status http `400` e o seguinte `body`:
    ```json
      { "message": "Não foi possivel remover o usuário" }
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
  <summary>:point_right: Criar um novo contato endpoint.</summary>

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
      { "message": "Não foi possivel cadastrar o numero" }
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
      { "message": "Não foi possivel atualizar o numero" }
    ```
</details>

<details close>
  <summary>:point_right: Deletar um contato endpoint.</summary>

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
      { "message": "Não foi possivel remover o numero" }
    ```

</details> -->

