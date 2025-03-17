const { User } = require("../Models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//API для регистрации нового пользователя
router.get("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Проверка уникальности email
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email уже используется" });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Генерация JWT токена
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Возвращаем успешный ответ с токеном
    res
      .status(201)
      .json({ message: "Пользователь успешно зарегистрирован", token });
  } catch (error) {
    console.error("Ошибка при регистрации пользователя:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
