const express = require("express");
const bodyParser = require("body-parser");
const { connectAndSyncDatabase } = require("./Utils/db_launch");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

require("dotenv").config();

switch (process.env.NODE_ENV) {
  case "development":
    dotenv.config({ path: ".env.development" });
    break;
  case "test":
    dotenv.config({ path: ".env.test" });
    break;
  case "production":
    dotenv.config({ path: ".env.production" });
    break;
  default:
    throw new Error("NODE_ENV not set");
}

// Middleware для обработки JSON
app.use(express.json());

// Включаем CORS с настройками по умолчанию
app.use(cors());

// Настройка CORS
const corsOptions = {
  origin: "http://geula-list.ru",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

//Экспорт путей API
const registerRoutes = require("./API/register");

// Использование роутера для регистрации
app.use("/api/register", registerRoutes);

// Определение порта
const PORT = 3000;

// Подключение и синхронизация с базами данных
connectAndSyncDatabase();

// Обработка GET-запроса к корневому маршруту
app.get("/", (req, res) => {
  res.send("Фудж, соси хуец");
});

console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("Type of DB_PASSWORD:", typeof process.env.DB_PASSWORD);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен успешно на порту ${PORT}`);
});
