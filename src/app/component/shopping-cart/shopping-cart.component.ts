import { Component, OnInit } from '@angular/core';
import { CarComponentComponent } from '../car-component/car-component.component';
import {ComponentCar} from 'src/app/model/componentCar.model';
import { SharedService } from 'src/app/shared/shared.service';
import { CartService } from 'src/app/services/cart.service';
import { panierservice } from 'src/app/services/panierservice.service';
import { CartItem } from 'src/app/model/cartItem';

@Component({
  providers:[CarComponentComponent],
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  panierid: number=0;
  carttemp: CartItem={
    component:"",
    quantity: 0
  };
  objectitems: any;
  constructor(private cartService:CartService,private sharedservice:SharedService,private panierservice:panierservice) {
    console.log("HHHHHHHHHHHHHHHH fISRST");
    this.updateCarStatus();
    console.log("cc"+this.totalPrice);
    this.totalPrice=this.sharedservice.gettotalprice();
    if(this.totalPrice===undefined) this.totalPrice=0;
    this.totalQuantity=this.sharedservice.gettotalquantity();
    if(this.totalQuantity===undefined) this.totalQuantity=0;
    this.panierid =this.sharedservice.getPaniernumber();
    this.cartitems=this.sharedservice.getcartitems();
    console.log("dvdf",this.cartitems);
   
    
    console.log("the quantity is:",this.totalQuantity);

   }

   totalPrice:number =0.00;
   totalQuantity:number=0;
   inp:number=1;
   panier!: any;
   cartitems:CartItem[]=[];
   cartitems2:CartItem[]=[];
   components:ComponentCar[]=[]

   /*  {
      id: 1,
      name: "Engin-v4",
      description: "this engine is good for using",
      price: 20,
      type: "Engin",
      picture: "https://images4.alphacoders.com/320/thumb-350-32038.jpg",
      discount: 0,
      quantity: 200,
      numberPersonRate: 35,
      numberRate: 150,
      categories: {
           id: 1,
           "marque":"mercedes"
      }
    },
    {
      id: 2,
      name: "bougie",
      description: "this bougie is good for using",
      price: 70,
      type: "Bougie",
      picture: "https://st.depositphotos.com/1000128/3409/i/600/depositphotos_34099985-stock-photo-sparkplug.jpg",
      discount: 0,
      quantity: 40,
      numberPersonRate: 35,
      numberRate: 150,
      categories: "BMW"
    },
    {
      id: 3,
      name: "Pneus-v68",
      description: "this pneus is good for using",
      price: 20,
      type: "Pneus",
      picture: "https://img.freepik.com/photos-gratuite/roue-voiture-pneu-voiture-roues-aluminium-isoles-fond-blanc_39420-40.jpg?size=626&ext=jpg",
      discount: 0,
      quantity: 80,
      numberPersonRate: 35,
      numberRate: 150,
      categories: "AUDI"
    }
  ]; */

  ngOnInit(): void {
    console.log("HHHHHHHHHHHHHHHH Second");
    this.panierid =this.sharedservice.getPaniernumber();
    console.log(this.panierid);
    this.cartService.getpanier(this.panierid).subscribe((res:any)=>{
      this.panier=res;
      console.log(this.panier);
    })
    
    this.cartitems=this.sharedservice.getcartitems();
    console.log("cartitems",this.cartitems);
 
    
  }

  public returnlength(){
    return this.components?.length;
  }
  
  public decrement(c:number){
    this.cartitems.filter(obj => {
      if(obj.component.id===c){
        this.carttemp= obj;
        console.log(this.carttemp);
        this.panierservice.updatetoCartde(this.carttemp);
      }
    })
     
    this.cartitems=this.sharedservice.getcartitems();
    this.totalPrice=this.sharedservice.gettotalprice();
    console.log(this.totalPrice);
    this.totalQuantity=this.sharedservice.gettotalquantity();
    console.log(this.totalQuantity);
  }
  public increment(c:number){
    console.log("Mooohim 1: ",c);
    this.cartitems.filter(obj => {
      if(obj.component.id===c){
        console.log("Mooohim 2: ",c);
        this.carttemp= obj;
        console.log(this.carttemp);
        this.panierservice.updatetoCartin(this.carttemp);
      }
    })
     
    this.cartitems=this.sharedservice.getcartitems();
    this.totalPrice=this.sharedservice.gettotalprice();
    console.log(this.totalPrice);
    this.totalQuantity=this.sharedservice.gettotalquantity();
    console.log(this.totalQuantity);
}

public somme(){
  var sum=0;
  for(var i=0 ;i<this.components.length;i++){
    sum=this.components[i].quantity*this.components[i].price+sum;
  }
  return sum;
}

public deleteformpanier(id:number){
   
   this.cartitems.forEach((value,index)=>{
        if(value.component.id===id) this.cartitems.splice(index,1);
    });

    this.panierservice.deletetoCart(id);
    this.totalPrice= this.sharedservice.gettotalprice();
    this.totalQuantity=this.sharedservice.gettotalquantity();
 
}





updateCarStatus(){


  console.log("entred in update")
  this.panierservice.totalPrice
 console.log("ccprice:"+this.totalPrice);
  this.panierservice.totalQuantity

  console.log("the quant"+this.totalQuantity);



};
 



}
