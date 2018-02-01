'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.removeConstraint('Pokes', 'Pokes_UserId_fkey', {}).then(() => {
      return queryInterface.bulkInsert('Pokes', [
        {
          UserId: 1,
          date: "2018-01-15",
          dose: 250,
          double: true,
          bleed: 'left-wrist',
          createdAt: 'Wed Nov 15 2017 20:16:37',
          updatedAt: 'Wed Nov 15 2017 20:16:37',
        },
        {
          UserId: 1,
          date: "2018-01-18",
          dose: 250,
          double: false,
          bleed: null,
          createdAt: 'Sat Nov 18 2017 20:16:37',
          updatedAt: 'Sat Nov 18 2017 20:16:37',
        },
        {
          UserId: 1,
          date: "2018-01-22",
          dose: 250,
          double: false,
          bleed: null,
          createdAt: 'Wed Nov 22 2017 20:16:37',
          updatedAt: 'Wed Nov 22 2017 20:16:37',
        },
        {
          UserId: 1,
          date: "2018-01-24",
          dose: 250,
          double: true,
          bleed: 'left-foot',
          createdAt: 'Fri Nov 24 2017 20:16:37',
          updatedAt: 'Fri Nov 24 2017 20:16:37',
        },
        {
          UserId: 1,
          date: "2018-01-11",
          dose: 250,
          double: false,
          bleed: null,
          createdAt: 'Mon Dec 11 2017 20:16:37',
          updatedAt: 'Mon Dec 11 2017 20:16:37',
        },
        {
          UserId: 1,
          date: "2018-01-14",
          dose: 250,
          double: true,
          bleed: 'lower-back',
          createdAt: 'Thu Dec 14 2017 20:16:37',
          updatedAt: 'Thu Dec 14 2017 20:16:37',
        },
        {
          UserId: 1,
          date: "2018-01-13",
          dose: 250,
          double: true,
          bleed: null,
          createdAt: 'Wed Dec 13 2017 20:16:37',
          updatedAt: 'Wed Dec 13 2017 20:16:37',
        },
        {
          UserId: 1,
          date: "2018-01-04",
          dose: 250,
          double: false,
          bleed: null,
          createdAt: 'Mon Dec 04 2017 20:16:37',
          updatedAt: 'Mon Dec 04 2017 20:16:37',
        },
        {
          UserId: 1,
          date: "2018-01-02",
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