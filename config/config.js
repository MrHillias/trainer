require("dotenv").config(); // Загружаем переменные окружения

module.exports = {
  development: {
    username: process.env.DB_NAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    port: process.env.DB_PORT_DEV || 5432,
    dialect: "postgres",
    logging: console.log, // Включаем логирование SQL-запросов для разработки
  },
  test: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    port: process.env.DB_PORT_TEST || 5432,
    dialect: "postgres",
    logging: false, // Отключаем логирование для тестов
  },
  production: {
    username: process.env.DB_USER_PROD,
    password: process.env.DB_PASSWORD_PROD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST_PROD,
    port: process.env.DB_PORT_PROD || 5432,
    dialect: "postgres",
    logging: false, // Отключаем логирование для продакшн
  },
};
