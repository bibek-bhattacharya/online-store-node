import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export interface ProductInterface {
  name: string;
  price: string;
}

export class Product extends Model {
  public id!: number;
  public name!: string;
  public price!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        // Note: To get the same Id on INSERT followed by a DELETE consistently, do not use autoIncrement.
        // autoIncrement: true,
        // On an INSERT, if the INTEGER PRIMARY KEY column is not explicitly given a value, then it will be filled automatically with an unused integer.
        // This is true regardless of whether or not the AUTOINCREMENT keyword is used.
        // If the AUTOINCREMENT keyword appears after INTEGER PRIMARY KEY, it prevents the reuse of ROWIDs from previously deleted rows.
        primaryKey: true
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      price: {
        type: new DataTypes.STRING(16),
        allowNull: false
      }
    },
    {
      tableName: "products",
      sequelize: database // this bit is important
    }
  );
  
  // force : false => Do not overwrite the database if exists.
  Product.sync({ force: false }).then(() => console.log("Connected to database"));