'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID, 
        defaultValue: Sequelize.UUIDV4 
      },
      paypal_confirmation: {
        type: Sequelize.STRING
      },
      total_price: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.ENUM,
        values: ["in_box", "cancelled", "payed"]
      },
      order_hour: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reservations');
  }
};