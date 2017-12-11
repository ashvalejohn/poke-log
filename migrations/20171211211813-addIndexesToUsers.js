'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addIndex('Users', ['email', 'sessionToken']);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return queryInterface.removeIndex('Users', ['email', 'sessionToken']);
  }
};
