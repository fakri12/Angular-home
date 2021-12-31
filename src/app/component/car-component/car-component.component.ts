import { Component, Injectable, OnInit } from '@angular/core';
import { ComponentCarSe } from 'src/app/services/componentCarSe.service';
import {ComponentCar} from 'src/app/model/componentCar.model';
import { AppComponent } from 'src/app/app.component';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CarComponentComponent implements OnInit {

  constructor(private componenCarSe: ComponentCarSe, public app:AppComponent, public service:SharedService) {
    this.getAllComponent();
   }

  components?:ComponentCar[];
  componentdetail?:ComponentCar;

  ngOnInit(): void {
  }

  public getAllComponent(){
    this.componenCarSe.getComponent().subscribe(data => {
      this.components=data;
    })
  }

  public senddetails(c: ComponentCar){
    
    this.service.setComponentDetails(c);
    this.app.setComponantdetails(true);
  }
}
