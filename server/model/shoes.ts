import * as ShoeModel from './shoe'

export class Shoes {
    private shoesList: Array<ShoeModel.Shoe>;
    constructor(shoes: Array<ShoeModel.Shoe> = []) {
        this.shoesList = new Array<ShoeModel.Shoe>();
        shoes.forEach(
            (shoe) => this.shoesList.push(shoe)
        );
    }
    public list(): Array<ShoeModel.Shoe> {
        return this.shoesList;
    }
    public add(shoeName: string, shoeSize: number, shoeQuantity: number): Array<ShoeModel.Shoe> {

        let shoeIds: Array<number> = this.shoesList.map(
            (shoe) => shoe.getId()
        );
        let shoeId: number = Math.max(...shoeIds) + 1;

        let shoe = new ShoeModel.Shoe(shoeId, shoeName, shoeSize, shoeQuantity);

        this.shoesList.push(shoe);
        return this.shoesList;
    }
    public delete(shoeId: number): Boolean
    {
      let deleted: Boolean = false;
      this.shoesList = this.shoesList.filter(
        (shoe: ShoeModel.Shoe) => {
          deleted = deleted || shoe.getId() === shoeId;
          return shoe.getId() !== shoeId
        }
      )
      return deleted;
    }
    public fetch(shoeId: number): ShoeModel.Shoe {
        return shoeId && this.shoesList.filter(
            (product: ShoeModel.Shoe) => product.getId() === shoeId
        ).shift();
    }
    public find(shoeQuery: string): ShoeModel.Shoe {
      let shoeId: number = parseInt(shoeQuery);
      shoeQuery = shoeQuery.toLowerCase();
      return this.shoesList.filter(
          (shoe: ShoeModel.Shoe) => shoe.getId() === shoeId
          || shoe.getName().toLowerCase() === shoeQuery
      ).shift();
    }
}