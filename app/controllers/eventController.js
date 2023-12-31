const { Events } = require("../models/index");

const getEvents = async (req, res) => {
  let events = await Events.findAll();

  res.json(events);
};

const getEvent = async (req, res) => {
  /*let { id } = req.params;

  let event = await Events.findByPk(id);

  if (!event) {
    res.status(404).json({ msg: "Evento no encontrado" });
  } else {
    res.json(event);
  }*/

  res.json(req.event);
};

const createEvent = async (req, res) => {
  let newEvent = req.body;
  let requiredFields = [
    "tittle",
    "description",
    "location",
    "starttime",
    "endtime",
    "startday",
    "endday",
    "categoryId",
    "payment_method_Id",
    "userId",
  ];

  requiredFields.forEach((field) => {
    if (newEvent[field] === undefined) {
      res.status(500).json({ message: `${[field]} is required` });
    }
  });

  try {
    const createEvent = await Events.create(newEvent);
    res.status(201).json(createEvent);
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .json({ message: "Ocurrio un error al procesar la solicitud" });
  }
};

//Update

const updateEvent = async (req, res) => {
  req.event.tittle = req.body.tittle;
  req.event.description = req.body.description;

  req.event.save().then((event) => {
    res.json(event);
  });
};

//delete
const deleteEvent = async (req, res) => {
  req.event.destroy().then((event) => {
    res.json({ msg: "El evento ha sido eliminado" });
  });
};

const find = async (req, res, next) => {
  let { id } = req.params;

  let event = await Events.findByPk(id);

  if (!event) {
    res.status(404).json({ msg: "Evento no encontrado" });
  } else {
    req.event = event;
    next();
  }
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  find,
};
