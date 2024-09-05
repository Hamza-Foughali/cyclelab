const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Bicycle = sequelize.define("Bicycle", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  imageURL: {
    type: DataTypes.STRING,
  },
});

module.exports = Bicycle;
