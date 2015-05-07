"use strict";
module.exports = function(sequelize, DataTypes) {
  var slides = sequelize.define("slides", {
    slide_1: DataTypes.STRING,
    slide_2: DataTypes.STRING,
    slide_3: DataTypes.STRING,
    slide_4: DataTypes.STRING,
    slide_5: DataTypes.STRING,
    slide_6: DataTypes.STRING,
    slide_7: DataTypes.STRING,
    slide_8: DataTypes.STRING,
    slide_9: DataTypes.STRING,
    slide_10: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    
    timestamps  : true,

    classMethods: {
      associate: function(models) {
        slides.belongsTo(models.users, {
            foreignKey: "user_id"
        });
      }
    }
  });
  return slides;
};