const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  encodeURIComponent(process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: console.log, // Отключаем логирование для тестов
  }
);

module.exports = sequelize;
