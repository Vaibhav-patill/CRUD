
const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

//middleware
const logRequest = (req, res, next) => {
  console.log(`${new Date().toISOString()} request to : ${req.OriginalUrl}`);
  next();
};

const menuRouter = require("./routes/menuRouter");
const personRouter = require("./routes/personRoutes");
app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})
app.use("/person",personRouter);
app.use("/menu",menuRouter );


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
