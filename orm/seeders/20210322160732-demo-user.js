'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin', password: '123456', email: 'ramses2099@gmail.com', status: 'ACTIVO', createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'guest', password: '123456', email: 'guest@gmail.com', status: 'ACTIVO', createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
