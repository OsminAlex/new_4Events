"use strict";
const { Model } = require("sequelize");
const database = require("../../config/database");
const role = require("./role");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: "El nombre solo debe de contener letras",
          },
          len: {
            args: [2, 255],
            msg: "El nombre debe de tener minimamente 2 carecteres",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "La contraseña debe de tener minimamente 6 caracteres",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "El email debe de ser un correo valido",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
      freezeTableName: true,
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Events, { as: "Events", foreignkey: "userId" });
    User.belongsToMany(models.Roles, {
      as: "Roles",
      through: "user_role",
      foreignKey: "user_id",
    });
  };

  //Comprueba que el usuario es administrador
  User.isAdmin = (Roles) => {
    let tmpArray = [];
    Roles.forEach((role) => tmpArray.push(role.role));

    return tmpArray.includes("admin");
  };

  return User;
};
