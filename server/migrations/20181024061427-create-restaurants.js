'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID, 
        defaultValue: Sequelize.UUIDV4 
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM,
        values: ["mexican", "chinese", "italian", "fastfood"]
      },
      description: {
        type: Sequelize.TEXT
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      opens: {
        type: Sequelize.STRING
      },
      closes: {
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
    return queryInterface.dropTable('Restaurants');
  }
};