'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.removeConstraint('Pokes', 'Pokes_UserId_fkey', {}).then(() => {
      return queryInterface.bulkInsert('Pokes', [
        {
          UserId: 4,
          date: "2017-12-14",
          dose: 250,
          double: true,
          bleed: 'lower-back',
          createdAt: 'Thu Dec 14 2017 20:16:37',
          updatedAt: 'Thu Dec 14 2017 20:16:37',
        },
        {
          UserId: 4,
          date: "2017-12-13",
          dose: 250,
          double: true,
          bleed: null,
          createdAt: 'Wed Dec 13 2017 20:16:37',
          updatedAt: 'Wed Dec 13 2017 20:16:37',
        },
        {
          UserId: 4,
          date: "2017-12-04",
          dose: 250,
          double: false,
          bleed: null,
          createdAt: 'Mon Dec 04 2017 20:16:37',
          updatedAt: 'Mon Dec 04 2017 20:16:37',
        },
        {
          UserId: 4,
          date: "2017-12-02",
          dose: 250,
          double: false,
          bleed: null,
          createdAt: 'Sat Dec 02 2017 20:16:37',
          updatedAt: 'Sat Dec 02 2017 20:16:37',
        }
      ], {})
    });

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