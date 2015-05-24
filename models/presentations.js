'use strict';
module.exports = function(sequelize, DataTypes) {
  var presentations = sequelize.define('presentations', {
    slide_1_bg: DataTypes.TEXT,
    slide_1_title: DataTypes.TEXT,
    slide_1_text: DataTypes.TEXT,
    slide_2_bg: DataTypes.TEXT,
    slide_2_title: DataTypes.TEXT,
    slide_2_text: DataTypes.TEXT,
    slide_3_bg: DataTypes.TEXT,
    slide_3_title: DataTypes.TEXT,
    slide_3_text: DataTypes.TEXT,
    slide_4_bg: DataTypes.TEXT,
    slide_4_title: DataTypes.TEXT,
    slide_4_text: DataTypes.TEXT,
    slide_5_bg: DataTypes.TEXT,
    slide_5_title: DataTypes.TEXT,
    slide_5_text: DataTypes.TEXT,
    slide_6_bg: DataTypes.TEXT,
    slide_6_title: DataTypes.TEXT,
    slide_6_text: DataTypes.TEXT,
    slide_7_bg: DataTypes.TEXT,
    slide_7_title: DataTypes.TEXT,
    slide_7_text: DataTypes.TEXT,
    slide_8_bg: DataTypes.TEXT,
    slide_8_title: DataTypes.TEXT,
    slide_8_text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {

    classMethods: {
      associate: function(models) {
        presentations.belongsTo(models.users, {
            foreignKey: "user_id"
        });
      }
    }
  });
  return presentations;
};