"use strict";
const { Model } = require("sequelize");
const database = require("../../config/database");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roles.init(
    {
      role: {
        type: DataTypes.STRING,
        defaultValue: "user",
      },
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );

  Roles.associate = function (models) {
    Roles.belongsToMany(models.User, {
      as: "User",
      through: "user_role",
      foreignKey: "role_id",
    });
  };

  return Roles;
};
