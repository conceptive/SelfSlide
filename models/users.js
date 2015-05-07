"use strict";
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    username: DataTypes.STRING,
    password_digest: DataTypes.TEXT,
    email: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    
    timestamps  : true,

    classMethods: {
       associate: function(models) {
          users.hasMany(models.slides, {
            foreignKey: "user_id"
          });
        }
      }
    });
  return users;
};