'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', [
            {
                firstName: 'Fulano',
                lastName: 'de Tal',
                email: 'fulano@detal.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                firstName: 'Ciclano',
                lastName: 'de Tal',
                email: 'ciclano@detal.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                firstName: 'Beltrano',
                lastName: 'da Silva',
                email: 'beltrano@dasilva.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
