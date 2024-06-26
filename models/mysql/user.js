const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "usuarios",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM(["user", "admin"]),
    },
  },
  {
    timestamps: true,
  }
);
User.find = User.findAll;
User.findById = User.findByPk;

module.exports = User;