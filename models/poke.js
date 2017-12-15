'use strict';
module.exports = (sequelize, DataTypes) => {
  var Poke = sequelize.define('Poke', {
    date: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please provide a date'
        }
      }
    },
    dose: DataTypes.INTEGER,
    bleed: DataTypes.STRING,
    double: DataTypes.BOOLEAN
  });

  Poke.associate = (models) => {
    Poke.belongsTo(models.User);
  };

  return Poke;
};
