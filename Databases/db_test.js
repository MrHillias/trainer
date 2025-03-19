const Sequelize = require("sequelize");
require("dotenv").config();

console.log("DB_USER (перед подключением):", process.env.DB_USER);
console.log("DB_PASSWORD (перед подключением):", process.env.DB_PASSWORD);
console.log("DB_HOST (перед подключением):", process.env.DB_HOST);
console.log("DB_PORT (перед подключением):", process.env.DB_PORT);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  encodeURIComponent(process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: (msg) => console.log("SQL:", msg),
  }
);

module.exports = sequelize;
