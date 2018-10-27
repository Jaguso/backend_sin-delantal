'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users_Adress = sequelize.define('Users_Adress', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    zip_code: DataTypes.STRING
  }, {});
  Users_Adress.associate = function(models) {
    // Users_Adress.belongsTo(models.Users)
  };
  return Users_Adress;
};