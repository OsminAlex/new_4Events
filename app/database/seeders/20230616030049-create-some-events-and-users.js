"use strict";

const { User } = require("../../models/index");
const bcrypt = require("bcrypt");
const authConfig = require("../../../config/auth");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      User.create(
        {
          name: "Alex",
          email: "alex@gmail.com",
          password: bcrypt.hashSync("alexpassword", +authConfig.rounds),
          Events: [
            {
              tittle: "Reunion con amigos",
              description: "Invitar a amigos a casa para hablar",
              location: "Casa de Alex",
              starttime: "15:00",
              endtime: "22:00",
              startday: "2023-06-20",
              endday: "2023-06-20",
              categoryId: 1,
              payment_method_Id: 1,
            },
          ],
        },
        {
          include: "Events",
        }
      ),
      //-----------------------------------------------
      User.create(
        {
          name: "Joe",
          email: "joe@gmail.com",
          password: bcrypt.hashSync("joepassword", +authConfig.rounds),
          Events: [
            {
              tittle: "Fiesta de cumpleaños",
              description: "Fiesta que celebra los 23 años de Joe",
              location: "Restaurante: El chante",
              starttime: "18:00",
              endtime: "22:00",
              startday: "2023-07-11",
              endday: "2023-07-11",
              categoryId: 1,
              payment_method_Id: 1,
            },
          ],
        },
        {
          include: "Events",
        }
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete("Events", null, {}),
      queryInterface.bulkDelete("User", null, {}),
      queryInterface.bulkDelete("Category", null, {}),
      queryInterface.bulkDelete("PaymentMethod", null, {}),
    ]);
  },
};
