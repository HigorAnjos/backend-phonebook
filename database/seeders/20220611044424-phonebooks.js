module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Phonebooks', [
      {
        name: 'alguem',
        phone: '+380967891234',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        phone: '+380967891235',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jose',
        phone: '+380967891236',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joao',
        phone: '+380967891237',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pablo',
        phone: '+38094654651',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        phone: '+38094654652',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jose',
        phone: '+38094654653',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joao',
        phone: '+38094654654',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pablo',
        phone: '+380967891234',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        phone: '+380967891235',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jose',
        phone: '+380967891236',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joao',
        phone: '+380967891237',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pablo',
        phone: '+38094654651',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        phone: '+38094654652',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jose',
        phone: '+38094654653',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joao',
        phone: '+38094654654',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pablo',
        phone: '+380967891234',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        phone: '+380967891235',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jose',
        phone: '+380967891236',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joao',
        phone: '+380967891237',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pablo',
        phone: '+38094654651',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        phone: '+38094654652',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jose',
        phone: '+38094654653',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joao',
        phone: '+38094654654',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pablo',
        phone: '+380967891234',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        phone: '+380967891235',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jose',
        phone: '+380967891236',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joao',
        phone: '+380967891237',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pablo',
        phone: '+38094654651',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'maria',
        phone: '+38094654652',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jose',
        phone: '+38094654653',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'joao',
        phone: '+38094654654',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pablo',
        phone: '+380967891234',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => queryInterface.bulkDelete('Phonebooks', null, {}),
};