'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    name: DataTypes.STRING,
    type: {type: DataTypes.ENUM, values=["mexican", "chinese", "italian", "fastfood"]},
    description: DataTypes.TEXT,
    photos: DataTypes.ARRAY,
    opens: DataTypes.STRING,
    closes: DataTypes.STRING
  }, {});
  Restaurants.associate = function(models) {
    // Restaurants.hasOne(models.Restaurants_Address)
    // Restaurants.belongsTo(models.Users)
    // Restaurants.hasMany(models.Dishes)
    // Restaurants.belongsTo(models.Reservation)
  };
  return Restaurants;
};



// // EJEMPLO
// // en models:
// status: {type: DataTypes.ENUM, values: ["CF", "CC", "PN"]},

// // en migrations:
// status: {
//   type: Sequelize.ENUM,
//   values: ["CF", "CC", "PN"] //CF=confirmed, CC=cancelled, PN=pending
// },