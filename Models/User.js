const sequelize = require("../Databases/db_dev");
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, // По умолчанию пользователь не подтвержден
    },
  },
  {
    tableName: "Users", // Явное указание имени таблицы
  }
);

module.exports = User;
