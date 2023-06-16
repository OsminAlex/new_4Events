"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Events.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      tittle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "El titulo debe de tener minimamente 6 carecteres",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "La descripcion debe de tener minimamente 6 carecteres",
          },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: "El lugar debe de tener minimamente 6 carecteres",
          },
        },
      },
      starttime: {
        type: DataTypes.TIME, //representa una hora del día sin fecha
        allowNull: false,
      },
      endtime: {
        type: DataTypes.TIME, //representa una hora del día sin fecha
        allowNull: false,
      },
      startday: {
        type: DataTypes.DATEONLY, //almacena solo la fecha sin la hora y se representa en el formato 'YYYY-MM-DD'
        allowNull: false,
      },
      endday: {
        type: DataTypes.DATEONLY, //almacena solo la fecha sin la hora y se representa en el formato 'YYYY-MM-DD'
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Events",
      freezeTableName: true,
    }
  );

  Events.associate = function (models) {
    Events.belongsTo(models.User, { as: "author", foreignKey: "userId" });
    Events.belongsTo(models.Category, {
      as: "categorie",
      foreignKey: "categoryId",
    });
    Events.belongsTo(models.PaymentMethod, {
      as: "payment_method",
      foreignKey: "payment_method_Id",
    });
  };

  return Events;
};
