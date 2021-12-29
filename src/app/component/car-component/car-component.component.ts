import { Component, OnInit } from '@angular/core';
import { ComponentCarSe } from 'src/app/services/componentCarSe.service';
import {ComponentCar} from 'src/app/model/componentCar.model'

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent implements OnInit {

  constructor(private componenCarSe: ComponentCarSe) {
    console.log("HHHHHHHHHHHHHHH");
    this.getAllComponent();
   }

  components?:ComponentCar[];

  ngOnInit(): void {
  }

  public getAllComponent(){
    this.componenCarSe.getComponent().subscribe(data => {
      
      this.components=data;
      console.log("HHHHHHHHHHHHHHH");
    })
  }
}
