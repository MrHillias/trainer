// Установка Express
const express = require("express");
const app = express();

// Определение порта
const PORT = 3000;

// Обработка GET-запроса к корневому маршруту
app.get("/", (req, res) => {
  res.send("Доступ к сайту получен");
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен успешно на порту ${PORT}`);
});
