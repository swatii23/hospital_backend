const jwt = require("jsonwebtoken");
require("dotenv").config()

const token = (id) => {
     return jwt.sign({ userId: id }, process.env.SECRET_KEY);
}

module.exports = token