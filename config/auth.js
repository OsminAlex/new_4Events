require("dotenv").config();

module.exports = {
  key: process.env.AUTH_KEY,
  expires: process.env.AUTH_EXPIRES,
  rounds: process.env.AUTH_ROUNDS,
};
