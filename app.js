const express = require("express");
const morgan = require("morgan");
const sequelize = require("./src/configs/connectDB");
require("dotenv").config();
const app = express();
app.use(morgan);
const connectDatabase = require("./src/configs/connectDB");

const port = process.env.PORT;

connectDatabase
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// console.log("process.env:", process.env);
// hiểu đk env, biết cách connect đến database
