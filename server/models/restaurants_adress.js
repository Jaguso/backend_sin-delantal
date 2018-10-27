'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants_Adress = sequelize.define('Restaurants_Adress', {
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    zip_code: DataTypes.STRING
  }, {});
  Restaurants_Adress.associate = function(models) {
    // Restaurants_Adress.belongsTo(models.Restaurants)
  };
  return Restaurants_Adress;
};