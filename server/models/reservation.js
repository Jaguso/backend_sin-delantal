'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    paypal_confirmation: DataTypes.STRING,
    total_price: DataTypes.DECIMAL,
    status: {type: DataTypes.ENUM, values: ["in_box", "cancelled", "payed"]},
    order_hour: DataTypes.STRING
  }, {});
  Reservation.associate = function(models) {
    // Reservation.hasOne(models.User)
    // Reservation.hasOne(models.Comments)
    // Reservation.hasMany(models.Restaurants)
    // Reservation.hasMany(models.Dishes)
  };
  return Reservation;
};