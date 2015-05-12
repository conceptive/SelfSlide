'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: DataTypes.STRING,
    password_digest: DataTypes.TEXT,
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {

    classMethods: {
      associate: function(models) {
        users.hasMany(models.presentations, {
          foreignKey: "user_id"
        });
      }
    }
  });
  return users;
};