import { Injectable } from '@angular/core';
import { ComponentCar } from '../model/componentCar.model';
import {DesccomponentComponent} from '../component/desccomponent/desccomponent.component'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  componentDetails?: ComponentCar
  constructor() { }

  setComponentDetails(data:ComponentCar){  
    
    this.componentDetails = data;
  }

  getComponentDetails(){
    return this.componentDetails;
  }
}
