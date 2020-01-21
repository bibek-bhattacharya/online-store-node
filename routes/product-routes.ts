import { Request, Response } from "express";
import { ProductController } from "../controllers/product-controller";

export class ProductRoutes {
  public productController: ProductController = new ProductController();

  public routes(app): void {

    app.route("/v1/products").get(this.productController.index);
    app.route("/v1/product").post(this.productController.create);
    app.route("/v1/product").put(this.productController.update);
  }
}