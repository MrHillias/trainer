const sequelizeProd = require("../Databases/db_prod");
const sequelizeDev = require("../Databases/db_dev");
const sequelizeTest = require("../Databases/db_test");

const UserProd = require("../Models/User");
const UserDev = require("../Models/User");
const UserTest = require("../Models/User");

async function connectAndSyncDatabases() {
  try {
    await sequelizeProd.authenticate();
    console.log("Подключение к продакшн базе данных успешно.");
    await sequelizeProd.sync();
    console.log("Синхронизация с продакшн базой данных завершена.");

    await sequelizeDev.authenticate();
    console.log("Подключение к базе данных разработки успешно.");
    await sequelizeDev.sync();
    console.log("Синхронизация с базой данных разработки завершена.");

    await sequelizeTest.authenticate();
    console.log("Подключение к тестовой базе данных успешно.");
    await sequelizeTest.sync();
    console.log("Синхронизация с тестовой базой данных завершена.");
  } catch (error) {
    console.error(
      "Ошибка при подключении или синхронизации с базой данных:",
      error
    );
  }
}

module.exports = {
  connectAndSyncDatabases,
  UserProd,
  UserDev,
  UserTest,
};
