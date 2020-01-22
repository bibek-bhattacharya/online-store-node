import { Request, Response } from "express";
import { Product, ProductInterface } from "../models/product";
import {UpdateOptions} from "sequelize";

export class ProductController {

  public index(req: Request, res: Response) {
    Product.findAll<Product>({})
      .then((products: Array<Product>) => res.json(products))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: ProductInterface = req.body;

    Product.create<Product>(params)
    .then((product: Product) => res.status(200).json(product))
    .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response) {
    const productId: string = req.params.id;
    const params: ProductInterface = req.body;

    const update: UpdateOptions = {
      where: { id: productId },
      returning: true,
      limit : 1
    };

    Product.update(params, update)
    // Updated record is only returned in Progress.
    //.then((result: [number, Array<Product>]) => {
    .then((result: any) => {
      if (result[1] == 1) {
        res.status(200).json({ data: result[1]});
      }
      else {
        res.status(404).json({errors: ["Product not found"] });
      }
    })
    .catch((err: Error) => res.status(500).json(err));
  }

  public get(req: Request, res: Response) {
    const productId: string = req.params.id;
    Product.findByPk<Product>(productId)
    .then((product: Product | null) => {
        if (product) {
          res.json(product);
        }
        else {
          res.status(404).json({errors: ["Product not found"] });
        }
    })
    .catch((err: Error) => res.status(500).json(err));
  }

}