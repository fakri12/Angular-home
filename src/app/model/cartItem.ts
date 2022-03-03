import { ComponentCar } from "./componentCar.model";

export class CartItem {
    component: any;
    quantity: number;
     
    constructor(componentn: any){
        this.component=componentn;
        this.quantity=1;
    }
}