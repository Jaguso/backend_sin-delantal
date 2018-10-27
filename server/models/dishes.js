'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    pictures: DataTypes.ARRAY
  }, {});
  Dishes.associate = function(models) {
    // Dishes.belongsTo(models.Restaurants)
    // Dishes.belongsTo(models.Reservation)
    // Dishes.belongsTo(models.Reservation)
  };
  return Dishes;
};