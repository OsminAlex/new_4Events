"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //------------------------------------------
    return Promise.all([
      queryInterface.bulkInsert("Category", [
        {
          payment_methods: "Fiestas y celebraciones",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkDelete("Category", null, {}),
      queryInterface.bulkDelete("PaymentMethod", null, {}),
    ]);
  },
};
