import { Request, Response } from "express";
import { Product, ProductInterface } from "../models/product";

export class ProductController {

  public index(req: Request, res: Response) {
    Product.findAll<Product>({})
      .then((products: Array<Product>) => res.json(products))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: ProductInterface = req.body;

    Product.create<Product>(params)
    .then((product: Product) => res.status(201).json(product))
    .catch((err: Error) => res.status(500).json(err));
  }

}