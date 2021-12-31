import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POS';

  check = false;
  componantdetails = false;
  
  
  

 public getCheck(){
    return this.check;
  }
  public setCheck(v:boolean){
    console.log(v);
    
    this.check=v;
  }

  public getComponantdetails(){
    return this.componantdetails
  }

  public setComponantdetails(v:boolean){
    this.componantdetails = v;
  }
}
