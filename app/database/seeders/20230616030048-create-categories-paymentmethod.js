"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //------------------------------------------
    return Promise.all([
      queryInterface.bulkInsert("Category", [
        {
          categories: "Fiestas y celebraciones",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Conciertos y espectáculos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Conferencias y seminarios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Bodas y compromisos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Exhibiciones y ferias",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Eventos deportivos",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Eventos benéficos y de caridad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Festivales y ferias culturales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Experiencias gastronómicas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Actividades al aire libre y aventuras",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Eventos educativos y de formación",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Lanzamientos de productos y presentaciones",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Eventos de networking y de relaciones públicas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categories: "Eventos religiosos y ceremoniales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),

      queryInterface.bulkInsert("PaymentMethod", [
        {
          payment_methods: "Ninguno",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_methods: "Efectivo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_methods: "Tarjeta de crédito",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_methods: "Tarjeta de débito",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_methods: "PayPal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_methods: "Apple Pay",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_methods: "Transferencia bancaria",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_methods: "Pago móvil",
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
