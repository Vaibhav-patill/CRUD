const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL =process.env.MONGODB_URL;

mongoose.connect(mongoURL)
.then(() => console.log("Connection Successful"))
.catch((err) =>
  console.log(err)
);

module.exports = mongoose;

