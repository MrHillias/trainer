const sequelizeProd = require("../Databases/db_prod");
const sequelizeDev = require("../Databases/db_dev");
const sequelizeTest = require("../Databases/db_test");

const User = require("../Models/User");

async function connectAndSyncDatabase() {
  let sequelize;

  switch (process.env.NODE_ENV) {
    case "production":
      sequelize = sequelizeProd;
      break;
    case "development":
      sequelize = sequelizeDev;
      break;
    case "test":
      sequelize = sequelizeTest;
      break;
    default:
      throw new Error("NODE_ENV not set or invalid");
  }

  try {
    console.log("Загружены переменные окружения:");
    console.log("NODE_ENV:", process.env.NODE_ENV);
    console.log("DB_NAME:", process.env.DB_NAME);
    console.log("DB_USER:", process.env.DB_USER);
    console.log("DB_HOST:", process.env.DB_HOST);
    console.log("DB_PORT:", process.env.DB_PORT);
    await sequelize.authenticate();
    console.log(`Подключение к базе данных (${process.env.NODE_ENV}) успешно.`);
    await sequelize.sync();
    console.log(
      `Синхронизация с базой данных (${process.env.NODE_ENV}) завершена.`
    );
    console.error("Детали ошибки:", error.stack);
  } catch (error) {
    console.log(
      `Подключение к базе данных (${process.env.NODE_ENV}) неудачно.`
    );
    console.error(
      "Ошибка при подключении или синхронизации с базой данных:",
      error
    );
  }
}

module.exports = {
  connectAndSyncDatabase,
  User,
};
