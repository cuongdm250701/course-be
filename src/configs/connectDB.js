const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("", "root", "manhcuong2001", {
  host: "127.0.0.1",
  port: process.env.DB_PORT,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000, // Remove a connection from the pool after the connection has been idle (not been used) for 10 seconds
  },
});

module.exports = sequelize;
