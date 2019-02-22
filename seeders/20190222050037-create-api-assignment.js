'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bikes', [{
      manufacturer: 'BMC',
      model: 'Teammachine SLR01 Disc',
      price: '11999',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      manufacturer: 'Cannondale',
      model: 'Synapse Carbon Disc Ultegra SE',
      price: '3500',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      manufacturer: 'T3',
      model: 'Strada',
      price: '8000',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      manufacturer: 'Specialized',
      model: 'Men'\'s Diverge Expert',
      price: '1999',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      manufacturer: 'Giant',
      model: 'Defy Advanced 3',
      price: '1685',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bikes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
