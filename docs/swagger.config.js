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
        url: `http://localhost:${PORT}`,
        description: 'Servidor local',
      },
    ],
  },
  apis: ['../routes/*.js'],
};

module.exports = swaggerConfig;
