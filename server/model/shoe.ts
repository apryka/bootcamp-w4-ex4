export class Shoe {
    private id: number;
    constructor(id: number, public name: string, public size: number = 44, public quantity: number = 0) {
        this.id = id;
    }
    public getId() {
        return this.id;
    }
    public getName() {
        return this.name;
    }
    public setName(name: string)
    {
      this.name = name;
    }
    public getSize() {
        return this.size;
    }
    public setSize(size: number) {
        this.size = size;
    }
    public updateQuantity(newQuantity: number) {
        this.quantity = newQuantity;
    }
    public addProducts(addedQuantity: number) {
        this.quantity += addedQuantity;
    }
    public substractProducts(substrackedQuantity: number) {
        this.quantity -= substrackedQuantity;
    }
}