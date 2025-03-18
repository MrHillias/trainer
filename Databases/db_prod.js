const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME_PROD,
  process.env.DB_USER_PROD,
  process.env.DB_PASSWORD_PROD,
  {
    host: process.env.DB_HOST_PROD,
    port: process.env.DB_PORT_PROD,
    dialect: "postgres",
    logging: false, // Отключаем логирование для продакшн
  }
);

module.exports = sequelize;
