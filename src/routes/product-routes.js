"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = require("../controllers/product-controller");
const swagger_ui_express_1 = require("swagger-ui-express");
const swaggerDocument = require("../static/swagger_product.json");
class ProductRoutes {
    constructor() {
        this.productController = new product_controller_1.ProductController();
    }
    routes(app) {
        // API routes
        app.route("/v1/products").get(this.productController.index);
        app.route("/v1/product").post(this.productController.create);
        app.route("/v1/product/:id").get(this.productController.get);
        app.route("/v1/product/:id").put(this.productController.update);
        app.route("/v1/product/:id").delete(this.productController.delete);
        // Swagger documentation route
        app.use("/v1/swagger", swagger_ui_express_1.serve, swagger_ui_express_1.setup(swaggerDocument));
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=product-routes.js.map