import { Request, Response } from 'express';
import { Product } from '../models/product.model';

class ProductsController {

    public index(req: Request, res: Response) {
        res.send('Index, la ruta funciona');
    }
    public show(req: Request, res: Response) {
        Product.findAll({
            raw: true
        })
            .then((results) => {
                console.log(results)
            })
            .catch((error) => {
                console.log(error)
            });
        res.send('Show, la ruta funciona');
    }
}

export const productsController = new ProductsController();