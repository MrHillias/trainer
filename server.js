const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("dotenv").config();

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

//Основная дб
const sequelize = require("./db");

// Проверка соединения с БД
sequelize
  .authenticate()
  .then(() => console.log("Соединение с базой данных установлено"))
  .catch((err) => console.error("Невозможно подключиться к базе данных:", err));

// Обработка GET-запроса к корневому маршруту
app.get("/", (req, res) => {
  res.send("Фудж, соси хуец");
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен успешно на порту ${PORT}`);
});
