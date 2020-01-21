"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../models/product");
class ProductController {
    index(req, res) {
        product_1.Product.findAll({})
            .then((products) => res.json(products))
            .catch((err) => res.status(500).json(err));
    }
    create(req, res) {
        const params = req.body;
        product_1.Product.create(params)
            .then((product) => res.status(201).json(product))
            .catch((err) => res.status(500).json(err));
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product-controller.js.map