'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users', [{
      email: 'demo@email.com',
      password: '$2a$08$NWk24HdWVpi6HBijD/.WV.ZnrvaAIE2IR1feZAoImhRNmzg7DL8yO',
      name: 'Demo User',
      dosage: 250,
      createdAt: 'Thu Dec 14 2017 20:16:37',
      updatedAt: 'Thu Dec 14 2017 20:16:37',
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
