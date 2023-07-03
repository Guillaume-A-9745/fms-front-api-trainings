export class Training {
    id : number;
    name :  string;
    description : string;
    price : number;
    logo : string
    quantity:number;

    constructor(id:number,name:string,description:string,price:number,logo : string,quantity:number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.logo = logo;
        this.quantity = quantity;
    }
}
