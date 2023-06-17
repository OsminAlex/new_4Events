"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PaymentMethod.init(
    {
      payment_methods: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [2, 255],
            msg: "PaymentMethod debe de tener almenos 2 caracteres ",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "PaymentMethod",
    }
  );

  PaymentMethod.associate = function (models) {
    PaymentMethod.hasMany(models.Events, {
      as: "Events",
      foreignKey: "payment_method_Id",
    });
  };

  return PaymentMethod;
};
