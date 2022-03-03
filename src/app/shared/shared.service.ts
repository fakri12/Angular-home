import { Injectable } from '@angular/core';
import { ComponentCar } from '../model/componentCar.model';
import {DesccomponentComponent} from '../component/desccomponent/desccomponent.component'
import { CartItem } from '../model/cartItem';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  cartitems!: CartItem[];
  componentDetails?: ComponentCar
  panierid: number=0;
  totalprice!: number
  totalquantity!:number
  num!:number
  constructor() { }


  getcartitems(){
    return this.cartitems;
  }


  setcartitems(cartitemsv:CartItem[]){
    this.cartitems=cartitemsv;
  }

  gettotalprice(){
    
    return this.totalprice;
  
  }

  settotalprice(ttprice:number){
    
    this.totalprice=ttprice;
  
  }


  gettotalquantity(){
    
    return this.totalquantity;
  
  }

  settotalquantity(ttquantity:number){
    
    this.totalquantity=ttquantity;
  
  }






  setComponentDetails(data:ComponentCar){  
    
    this.componentDetails = data;
  }

  getComponentDetails(){
    return this.componentDetails;
  }


  setPaniernumber(id:number){
    console.log("id", id);
  this.panierid=id;
  }


  getPaniernumber(){
    console.log("id2",this.panierid);
   return this.panierid;
  }

  setnumberlignecommande(nur:number){
    this.num=nur;
  }
  
  getnumberlignecommande(){
    return this.num;
  }
}
