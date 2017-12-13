'use strict';
module.exports = (sequelize, DataTypes) => {
  var Poke = sequelize.define('Poke', {
    date: DataTypes.DATEONLY,
    dose: DataTypes.INTEGER,
    bleed: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Poke;
};