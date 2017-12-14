'use strict';
module.exports = (sequelize, DataTypes) => {
  var Poke = sequelize.define('Poke', {
    date: DataTypes.STRING,
    dose: DataTypes.INTEGER,
    bleed: DataTypes.STRING,
    double: DataTypes.BOOLEAN
  });

  Poke.associate = (models) => {
    Poke.belongsTo(models.User);
  };

  return Poke;
};
