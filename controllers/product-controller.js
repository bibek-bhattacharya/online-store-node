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
            .then((product) => res.status(200).json(product))
            .catch((err) => res.status(500).json(err));
    }
    update(req, res) {
        const productId = req.params.id;
        const params = req.body;
        const update = {
            where: { id: productId },
            returning: true,
            limit: 1
        };
        product_1.Product.update(params, update)
            // Updated record is only returned in Progress.
            //.then((result: [number, Array<Product>]) => {
            .then((result) => {
            if (result[1] == 1) {
                res.status(200).json({ data: result[1] });
            }
            else {
                res.status(404).json({ errors: ["Product not found"] });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    get(req, res) {
        const productId = req.params.id;
        product_1.Product.findByPk(productId)
            .then((product) => {
            if (product) {
                res.json(product);
            }
            else {
                res.status(404).json({ errors: ["Product not found"] });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product-controller.js.map