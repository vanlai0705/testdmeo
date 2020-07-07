const Sequelize = require("sequelize");

const connectionString =
  process.env.DATABASE_URL || "postgres://postgres:123456@localhost:5432/Bank";
const db = new Sequelize(connectionString);
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = db;
