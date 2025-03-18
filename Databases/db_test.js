const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME_TEST,
  process.env.DB_USER_TEST,
  process.env.DB_PASSWORD_TEST,
  {
    host: process.env.DB_HOST_TEST,
    port: process.env.DB_PORT_TEST || 5432,
    dialect: "postgres",
    logging: false, // Отключаем логирование для тестов
  }
);

module.exports = sequelize;
