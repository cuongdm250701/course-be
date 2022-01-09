const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./src/configs/connectDB");
require("dotenv").config();
const app = express();
require("module-alias/register");
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

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/", require("@routes/index"));
app.use("/user", require("@routes/userRouter"));

// console.log("process.env:", process.env);
// hiểu đk env, biết cách connect đến database
