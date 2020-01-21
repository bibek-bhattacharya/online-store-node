"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const product_routes_1 = require("./routes/product-routes");
class App {
    constructor() {
        this.app = express();
        this.middleware();
        this.routes = new product_routes_1.ProductRoutes();
        this.routes.routes(this.app);
    }
    // Configure Express middleware
    middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map