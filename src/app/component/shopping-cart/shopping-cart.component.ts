import { Component, OnInit } from '@angular/core';
import { CarComponentComponent } from '../car-component/car-component.component';
import {ComponentCar} from 'src/app/model/componentCar.model';
import { ComponentCarSe } from 'src/app/services/componentCarSe.service';

@Component({
  providers:[CarComponentComponent],
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  constructor() {
   }
   inp:number=1;

   components:ComponentCar[]=[
    {
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
      categories: "mercedes"
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
  ];

  ngOnInit(): void {
  }

  public returnlength(){
    return this.components?.length;
  }
  
  public decrement(c:number){
    this.components.filter(obj => {
      if(obj.id==c)
         obj.quantity=obj.quantity-1;
    })
  }
  public increment(c:number){
    this.components.filter(obj => {
      if(obj.id==c)
         obj.quantity=obj.quantity+1;
    })
}

public somme(){
  var sum=0;
  for(var i=0 ;i<this.components.length;i++){
    sum=this.components[i].quantity*this.components[i].price+sum;
  }
  return sum;
}
}
