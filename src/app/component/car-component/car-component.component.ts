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
    this.getAllComponent();
   }

  components?:ComponentCar[];

  ngOnInit(): void {
    
  }

  public getAllComponent():any{
    this.componenCarSe.getComponent().subscribe(data => {
      this.components=data;
    })
  }
}
