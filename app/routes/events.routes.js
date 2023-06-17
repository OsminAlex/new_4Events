const express = require("express");
const router = express.Router();

const eventController = require("../controllers/eventController");

//Middleware
const auth = require("../middlewares/auth.js");

//Permissions
const eventPermission = require("../permissions/eventPermission");

module.exports.EventsAPI = (app) => {
  router
    .get("/", auth, eventController.getEvents)
    .get(
      "/:id",
      auth,
      eventController.find,
      eventPermission.getEvent,
      eventController.getEvent
    )
    .post("/", auth, eventController.createEvent)
    .put(
      "/:id",
      auth,
      eventController.find,
      eventPermission.updateEvent,
      eventController.updateEvent
    )
    .delete(
      "/:id",
      auth,
      eventController.find,
      eventPermission.deleteEvent,
      eventController.deleteEvent
    );

  app.use("/events", router);
};
