import { Request, Response } from "express";
import { ProductController } from "../controllers/product-controller";

import {serve, setup} from "swagger-ui-express"
import * as swaggerDocument from "../static/swagger_product.json"

export class ProductRoutes {
  public productController: ProductController = new ProductController();

  public routes(app): void {
    // API routes
    app.route("/v1/products").get(this.productController.index);
    app.route("/v1/product").post(this.productController.create);
    app.route("/v1/product/:id").get(this.productController.get);
    app.route("/v1/product/:id").put(this.productController.update);
    app.route("/v1/product/:id").delete(this.productController.delete);
    // Swagger documentation route
    app.use("/v1/swagger", serve, setup(swaggerDocument));     
  }
}