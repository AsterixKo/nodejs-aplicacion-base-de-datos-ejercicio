import { Request, Response } from 'express';
import { Product } from '../models/product.model';

class ProductsController {

    public index(req: Request, res: Response) {
        res.send('Index, la ruta funciona');
    }
    public async show(req: Request, res: Response) {

        const products = await Product.findAll({ raw: true });

        if (products) {
            res.send(products);
        } else {
            res.sendStatus(404);
        }
        // Product.findAll({
        //     raw: true
        // })
        //     .then((results) => {
        //         console.log(results)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     });
        // res.send('Show, la ruta funciona');
    }
}

export const productsController = new ProductsController();