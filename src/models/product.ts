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
        autoIncrement: true,
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