"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.database = new sequelize_1.Sequelize({
    database: "products_db",
    dialect: "sqlite",
    storage: "data/db.sqlite"
});
//# sourceMappingURL=database.js.map