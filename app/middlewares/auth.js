const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { User } = require("../models/index");

module.exports = (req, res, next) => {
  //console.log(req.headers);

  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Acceso no authorizado" });
  } else {
    //Comprobar validez del token
    let token = req.headers.authorization.split(" ")[1];

    //Comprobar la validez de este token
    jwt.verify(token, authConfig.key, (err, decoded) => {
      if (err) {
        res
          .status(500)
          .json({ msg: "Ha habido un problema al decodificar el token", err });
      } else {
        //console.log(decoded);

        User.findByPk(decoded.user.id, { include: "Roles" }).then((user) => {
          //console.log(user.Roles);

          req.user = user;
          next();
        });
      }
    });
  }
};
