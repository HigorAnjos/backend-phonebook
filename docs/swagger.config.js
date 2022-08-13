const PORT = process.env.PORT || 3001;

const swaggerConfig = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Phonebook',
      description: 'API para salvar seus contatos',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'https://backend-phonebook-2930.herokuapp.com/',
        description: 'Producao',
      },
      {
        url: `http://localhost:${PORT}`,
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerConfig;
