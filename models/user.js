'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    dosage: DataTypes.INTEGER
  });

  User.associate = (models) => {
    User.hasMany(models.Poke);
  };
  return User;
};
