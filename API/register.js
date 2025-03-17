const { User } = require("../Models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//API для регистрации нового пользователя
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Request body:", req.body); // для отладки

  try {
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
      { id: newUser.id, email: newUser.email },
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

router.get("/check-email", async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  } else {
    console.log("Проверка email:", email);
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.json({ exists: true, message: "Email уже используется" });
    } else {
      return res.json({ exists: false, message: "Email доступен" });
    }
  } catch (error) {
    console.error("Ошибка при проверке email:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
