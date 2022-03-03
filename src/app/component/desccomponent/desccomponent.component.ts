import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ComponentCar } from 'src/app/model/componentCar.model';
import {CarComponentComponent} from '../car-component/car-component.component';
import {SharedService} from "../../shared/shared.service";
import * as panierserviceService from 'src/app/services/panierservice.service';
import { CartItem } from 'src/app/model/cartItem';


@Component({
  selector: 'app-desccomponent',
  templateUrl: './desccomponent.component.html',
  styleUrls: ['./desccomponent.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class DesccomponentComponent implements OnInit {
  details = <ComponentCar> this.service.getComponentDetails();
  constructor(private carComp: CarComponentComponent, private service:SharedService,private cartservice:panierserviceService.panierservice) { 
    
  }

  ngOnInit(): void {
    console.log(this.service.getComponentDetails());
    
  }
  
  addtoCart(component:ComponentCar){
    console.log("first",component.id);
    console.log("second",component.name);
    const theCartItem= new CartItem(component);
     console.log(theCartItem);
    this.cartservice.addtoCart(theCartItem);
 }

  upadteDetails(){
    
    this.details = <ComponentCar>this.service.getComponentDetails();
  }
  
}
