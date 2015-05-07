"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("slides", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.STRING
      },
      slide_1: {
        type: DataTypes.STRING
      },
      slide_2: {
        type: DataTypes.STRING
      },
      slide_3: {
        type: DataTypes.STRING,
        allowNull: true
      },
      slide_4: {
        type: DataTypes.STRING,
        allowNull: true
      },
      slide_5: {
        type: DataTypes.STRING,
        allowNull: true
      },
      slide_6: {
        type: DataTypes.STRING,
        allowNull: true
      },
      slide_7: {
        type: DataTypes.STRING,
        allowNull: true
      },
      slide_8: {
        type: DataTypes.STRING,
        allowNull: true
      },
      slide_9: {
        type: DataTypes.STRING,
        allowNull: true
      },
      slide_10: {
        type: DataTypes.STRING,
        allowNull: true
      },
      user_id: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    })
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("slides").done(done);
  }
};