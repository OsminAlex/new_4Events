require("dotenv").config();

module.exports = {
  // Configuracion de DB
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "Educa2023*",
  database: process.env.DB_DATABASE || "new_4events",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mysql",
  port: 3307,

  // Configurar Seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  // Configuracion de Migrations
  migrationStorage: "sequelize",
  migrationStorageTableName: "migrations",
};
