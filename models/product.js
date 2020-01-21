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
        autoIncrement: true,
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
Product.sync({ force: false }).then(() => console.log("Products table created"));
//# sourceMappingURL=product.js.map