const mongoose = require('mongoose');
require("dotenv").config()

const connection = mongoose.connect(`${process.env.MONGODB_URL}/mock3`);

module.exports = connection