
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
   }

   components: any;
   componentsf: ComponentCar[]=[];
  componentdetail?:ComponentCar;

  ngOnInit(): void {
    this.componenCarSe.getComponent().subscribe((data: any )=>{
      this.componentsf=[];
      this.components= data._embedded;

      if(this.components.culasses!=null)
      this.componentsf=this.componentsf.concat(this.components.culasses);
      if(this.components.engines!=null)
      this.componentsf=this.componentsf.concat(this.components.engines);
      if(this.components.amortisseurs!=null)
      this.componentsf=this.componentsf.concat(this.components.amortisseurs);
      if(this.components.boujies!=null)
      this.componentsf=this.componentsf.concat(this.components.boujies);
      if(this.components.cabledefreins!=null)
      this.componentsf=this.componentsf.concat(this.components.cabledefreins);
      if(this.components.cardanss!=null)
      this.componentsf=this.componentsf.concat(this.components.cardanss);
      if(this.components.chaufages!=null)
      this.componentsf=this.componentsf.concat(this.components.chaufages);
      if(this.components.disques!=null)
      this.componentsf=this.componentsf.concat(this.components.disques);
      if(this.components.echappements!=null)
      this.componentsf=this.componentsf.concat(this.components.echappements);
      if(this.components.echappementsilencieus!=null)
      this.componentsf=this.componentsf.concat(this.components.echappementsilencieus);
      if(this.components.embrayages!=null)
      this.componentsf=this.componentsf.concat(this.components.embrayages);
      if(this.components.freinages!=null)
      this.componentsf=this.componentsf.concat(this.components.freinages);
      if(this.components.injecteurs!=null)
      this.componentsf=this.componentsf.concat(this.components.injecteurs);
      if(this.components.plaquettess!=null)
      this.componentsf=this.componentsf.concat(this.components.plaquettess);
      if(this.components.pluseurdairs!=null)
      this.componentsf=this.componentsf.concat(this.components.pluseurdairs);
      if(this.components.pneuss!=null)
      this.componentsf=this.componentsf.concat(this.components.pneuss);
      if(this.components.turbos!=null)
      this.componentsf=this.componentsf.concat(this.components.turbos);
      if(this.components.trainroulants!=null)
      this.componentsf=this.componentsf.concat(this.components.trainroulants);
      if(this.components.thermostats!=null)
      this.componentsf=this.componentsf.concat(this.components.thermostats);
      if(this.components.sondes!=null)
      this.componentsf=this.componentsf.concat(this.components.sondes);
      if(this.components.roulements!=null)
      this.componentsf=this.componentsf.concat(this.components.roulements);
      if(this.components.rotules!=null)
      this.componentsf=this.componentsf.concat(this.components.rotules);
      if(this.components.radiateurs!=null)
      this.componentsf=this.componentsf.concat(this.components.radiateurs);

      this.componentsf.sort((a,b)=> a.id-b.id);
      
      for(let i=0;i<this.componentsf.length;i++){
        this.componenCarSe.getcategorie(this.componentsf[i].id).subscribe((data:any)=>{
          this.componentsf[i].categories=data._embedded.categories;
     }) 
       
      }

    }
    )
  }

   public senddetails(c: ComponentCar){
     this.app.paiment = false;
     this.app.cart = false;
   this.service.setComponentDetails(c);
   this.app.setComponantdetails(true);
   }


}
