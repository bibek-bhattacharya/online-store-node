"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        // Note: To get the same Id on INSERT followed by a DELETE consistently, do not use autoIncrement.
        // autoIncrement: true,
        // On an INSERT, if the INTEGER PRIMARY KEY column is not explicitly given a value, then it will be filled automatically with an unused integer.
        // This is true regardless of whether or not the AUTOINCREMENT keyword is used.
        // If the AUTOINCREMENT keyword appears after INTEGER PRIMARY KEY, it prevents the reuse of ROWIDs from previously deleted rows.
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    price: {
        type: new sequelize_1.DataTypes.STRING(16),
        allowNull: false
    }
}, {
    tableName: "products",
    sequelize: database_1.database // this bit is important
});
// force : false => Do not overwrite the database if exists.
Product.sync({ force: false }).then(() => console.log("Connected to database"));
//# sourceMappingURL=product.js.map