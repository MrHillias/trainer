const { Sequelize } = require("sequelize");

module.exports = new Sequelize("db_metavision", "user", "Fud5e@$$", {
  host: "79.174.88.83",
  port: "19684",
  dialect: "postgres",
  logging: console.log, // Включаем логирование SQL-запросов
});
