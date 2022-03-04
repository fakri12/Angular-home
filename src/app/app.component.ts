import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POS';

  check = false;
  componantdetails = false;
  paiment = false;
  cart = false;
  

 public getCheck(){
    return this.check;
  }
  public setCheck(v:boolean){    
    this.check=v;
  }
  public getComponantdetails(){
    return this.componantdetails
  }
  public setComponantdetails(v:boolean){
    this.componantdetails = v;
  }
}
