import * as express from 'express';
import * as Shoe from '../model/shoe';
import * as ShoesModel from '../model/shoes'

export class Shoes {
    private shoesList: ShoesModel.Shoes;
    public static routes(): express.Router {
        let router: express.Router = express.Router();
        let shoesRoute: Shoes = new Shoes();
        router.get('/shoes/', shoesRoute.index.bind(shoesRoute));
        router.post('/shoes/', shoesRoute.create.bind(shoesRoute));
        router.put('/shoes/:shoe_id', shoesRoute.update.bind(shoesRoute));
        router.delete('/shoes/:shoe_id', shoesRoute.delete.bind(shoesRoute));
        router.get('/shoes/:shoe', shoesRoute.find.bind(shoesRoute));
        router.post('/shoes/delete/:shoe_id', shoesRoute.delete.bind(shoesRoute));
        router.post('/shoes/update/:shoe_id', shoesRoute.update.bind(shoesRoute));
        return router;
    }

    constructor() {
        this.shoesList = new ShoesModel.Shoes([
            new Shoe.Shoe(1043, 'Air Jordan XXXI', 43, 8),
            new Shoe.Shoe(1044, 'Air Jordan XXXI', 44, 3),
            new Shoe.Shoe(1045, 'Air Jordan XXXI', 45, 4),
            new Shoe.Shoe(2043, 'Air Jordan 1 Retro Ultra High', 43, 6),
            new Shoe.Shoe(2044, 'Air Jordan 1 Retro Ultra High', 44, 6),
            new Shoe.Shoe(2045, 'Air Jordan 1 Retro Ultra High', 45, 6),
            new Shoe.Shoe(3045, 'Air Jordan 1 Retro High', 45, 2),
            new Shoe.Shoe(3046, 'Air Jordan 1 Retro High', 46, 2),
            new Shoe.Shoe(3047, 'Air Jordan 1 Retro High', 47, 2),
            new Shoe.Shoe(4044, 'Nike Hyperdunk 2016 Low', 44, 5),
            new Shoe.Shoe(4046, 'Nike Hyperdunk 2016 Low', 46, 2),
            new Shoe.Shoe(4047, 'Nike Hyperdunk 2016 Low', 47, 2)
        ])
    }

    public index(request: express.Request, response: express.Response) {
        response.json(this.shoesList.list());
    }
    public create(request: express.Request, response: express.Response) {
        let shoeName: string = request.body.shoe_name;
        let shoeSize: number = request.body.shoe_size;
        let shoeQuantity: number = request.body.shoe_quantity;
        if (!shoeName) {
            response.status(500).send('Shoe name not found');
            return;
        }
        if (!shoeSize) {
            response.status(500).send('Shoe size not found');
            return;
        }
        if (!shoeQuantity) {
            response.status(500).send('Shoe quantity not found');
            return;
        }
        response.json(this.shoesList.add(shoeName, shoeSize, shoeQuantity));
    }
    public update(request: express.Request, response: express.Response)
    {
        let shoeId: number = parseInt(request.params.shoe_id);
        let shoe: Shoe.Shoe = this.shoesList.fetch(shoeId);
        let shoeName: string = request.body.shoe_name;
        let shoeSize: number = request.body.shoe_size;
        let shoeQuantity: number = request.body.shoe_quantity;

        if (!shoe) {
            response.status(404).send('Shoe not found');
            return;
        }

        if(shoeName !== undefined)
        {
          shoe.setName(shoeName);
        }
        if(shoeSize !== undefined)
        {
          shoe.setSize(shoeSize);
        }
        if(shoeQuantity !== undefined)
        {
          shoe.updateQuantity(shoeQuantity);
        }

        response.json(shoe);
    }
    public delete(request: express.Request, response: express.Response) {
        let shoeId: number = parseInt(request.params.shoe_id);
        let wasDeleted: Boolean = this.shoesList.delete(shoeId);

        if (!wasDeleted) {
            response.status(404).send('Shoe not found');
            return;
        }
        else
        {
          response.json({success: true});
        }

    }
    public find(request: express.Request, response: express.Response) {
        let shoeQuery: string = request.params.shoe;
        let shoe: Shoe.Shoe = this.shoesList.find(shoeQuery);

        if (!shoe) {
            response.status(404).send('Shoe not found');
            return;
        }
        response.json(shoe);

    }
}
