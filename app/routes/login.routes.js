const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

module.exports.LoginAPI = (app) => {
  router
    .post("/signin", authController.signIn)
    .post("/signup", authController.signUp);

  app.use("/login", router);
};
