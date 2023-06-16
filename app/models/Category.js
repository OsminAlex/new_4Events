"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      categories: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 255],
            msg: "La categoria debe de tener almenos 2 caractes",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.Events, { as: "Events", foreignkey: "categoryId" });
  };

  return Category;
};
