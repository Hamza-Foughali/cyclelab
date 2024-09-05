const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bicycle", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("================================");
    console.log("****** Database connected ******");
    console.log("================================");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
