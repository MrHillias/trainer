const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME_DEV,
  process.env.DB_USER_DEV,
  process.env.DB_PASSWORD_DEV,
  {
    host: process.env.DB_HOST_DEV,
    port: process.env.DB_PORT_DEV,
    dialect: "postgres",
    logging: console.log, // Включаем логирование для разработки
  }
);

module.exports = sequelize;
