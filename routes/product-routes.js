"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = require("../controllers/product-controller");
class ProductRoutes {
    constructor() {
        this.productController = new product_controller_1.ProductController();
    }
    routes(app) {
        app.route("/v1/products").get(this.productController.index);
        app.route("/v1/product").post(this.productController.create);
        app.route("/v1/product").put(this.productController.update);
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=product-routes.js.map