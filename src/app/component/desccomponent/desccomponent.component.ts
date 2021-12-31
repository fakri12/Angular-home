import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ComponentCar } from 'src/app/model/componentCar.model';
import {CarComponentComponent} from '../car-component/car-component.component';
import {SharedService} from "../../shared/shared.service";


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
  constructor(public carComp: CarComponentComponent, public service:SharedService) { 
    
  }

  ngOnInit(): void {
    console.log(this.service.getComponentDetails());
    
  }
  

  upadteDetails(){
    
    this.details = <ComponentCar>this.service.getComponentDetails();
  }
  
}
