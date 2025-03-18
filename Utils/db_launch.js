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
    await sequelize.authenticate();
    console.log(`Подключение к базе данных (${process.env.NODE_ENV}) успешно.`);
    await sequelize.sync();
    console.log(
      `Синхронизация с базой данных (${process.env.NODE_ENV}) завершена.`
    );
  } catch (error) {
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
