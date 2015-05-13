'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('presentations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      slide_1_bg: {
        type: Sequelize.TEXT
      },
      slide_1_text: {
        type: Sequelize.TEXT
      },
      slide_2_bg: {
        type: Sequelize.TEXT
      },
      slide_2_text: {
        type: Sequelize.TEXT
      },
      slide_3_bg: {
        type: Sequelize.TEXT
      },
      slide_3_text: {
        type: Sequelize.TEXT
      },
      slide_4_bg: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_4_text: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_5_bg: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_5_text: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_6_bg: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_6_text: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_7_bg: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_7_text: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_8_bg: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      slide_8_text: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('presentations');
  }
};