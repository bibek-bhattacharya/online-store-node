import { Sequelize } from "sequelize";

export const database = new Sequelize({
  database: "products_db",
  dialect: "sqlite",
  storage: "data/db.sqlite",
  logging: false
});