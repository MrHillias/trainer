const nodemailer = require("nodemailer");

// Настройка транспорта для отправки писем
const transporter = nodemailer.createTransport({
  host: "mail.hosting.reg.ru", // SMTP-сервер домена
  port: 587, // Обычно используется порт 587 для TLS
  secure: false,
  auth: {
    user: "no-reply@yoursimulator.ru",
    pass: process.env.MAIL_PASSWORD,
  },
});

module.exports = transporter;
