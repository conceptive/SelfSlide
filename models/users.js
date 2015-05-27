'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: {msg: "Username must be letters and numbers only"},
        notEmpty: {msg: "Username cannot be empty"}
      }
    },
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: "Password cannot be empty"}
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {msg: "Name must be letters only"}
      }
    },
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
