const { User } = require("../models/index");

module.exports = {
  getEvent(req, res, next) {
    if (req.user.id === req.event.userId || User.isAdmin(req.user.Roles)) {
      next();
    } else {
      res.status(401).json({ msg: "No estas autorizado para ver esta pagina" });
    }
  },

  updateEvent(req, res, next) {
    if (req.user.id === req.event.userId || User.isAdmin(req.user.Roles)) {
      next();
    } else {
      res.status(401).json({ msg: "No estas autorizado para ver esta pagina" });
    }
  },

  deleteEvent(req, res, next) {
    if (req.user.id === req.event.userId || User.isAdmin(req.user.Roles)) {
      next();
    } else {
      res.status(401).json({ msg: "No estas autorizado para ver esta pagina" });
    }
  },
};
