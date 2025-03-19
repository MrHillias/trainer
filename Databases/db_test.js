const Sequelize = require("sequelize");
require("dotenv").config(); // Убедитесь, что эта строка в самом начале файла

// Логирование переменных окружения для отладки
console.log("DB_USER (перед подключением):", process.env.DB_USER);
console.log("DB_PASSWORD (перед подключением):", process.env.DB_PASSWORD);
console.log("DB_HOST (перед подключением):", process.env.DB_HOST);
console.log("DB_PORT (перед подключением):", process.env.DB_PORT);

console.log("Тип DB_PASSWORD:", typeof process.env.DB_PASSWORD);

// Создание подключения к базе данных с использованием переменных окружения
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  String(process.env.DB_PASSWORD), // Убираем encodeURIComponent
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: (msg) => console.log("SQL:", msg), // Логирование SQL запросов
  }
);

module.exports = sequelize;
