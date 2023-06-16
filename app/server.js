const express = require("express");
const app = express();
const { sequelize } = require("./models/index.js");

//Routes
const { LoginAPI } = require("./routes/login.routes.js");
const { EventsAPI } = require("./routes/events.routes.js");

//Settings
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//-------------------------------------
LoginAPI(app);
EventsAPI(app);

//-------------------------------------
app.get("/", (req, res) => {
  res.send("API - 4Events");
});

app.listen(PORT, () => {
  console.log(`App corriendo en: http://localhost:${PORT}!`);

  sequelize.authenticate().then(() => {
    console.log("Conexion exitosa a la base de datos");
  });
});
