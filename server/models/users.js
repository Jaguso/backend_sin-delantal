'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    // Users.hasOne(models.Users_Adress)
    // Users.belongsTo(models.Reservation)
    // Users.hasMany(models.Restaurants)
  };
  return Users;
};