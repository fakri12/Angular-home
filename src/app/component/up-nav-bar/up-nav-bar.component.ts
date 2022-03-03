import { Component, Injectable, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AppComponent } from 'src/app/app.component';
import { Client } from 'src/app/model/client.model';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-up-nav-bar',
  templateUrl: './up-nav-bar.component.html',
  styleUrls: ['./up-nav-bar.component.css']
})

@Injectable({providedIn:"root"})
export class UpNavBarComponent implements OnInit {

  user!:SocialUser;
  isLogIn = false;
  isLogInNormal=false;
  public client!:Client;
  
  constructor(public app:AppComponent, private authService: SocialAuthService, private service: clientService) {
    
  }
  ngOnInit(): void {
    this.authService.authState.subscribe(
      data =>{
        this.isLogIn = (data != null)
        this.user = data;
      }
    )
    
    
  }
   myInfo:boolean=true;
  
  changecheck(){
    console.log(this.app.componantdetails);
    this.app.setComponantdetails(false);
  }

  signOut(): void {
    this.authService.signOut();
  }

  clientDetail(){
    if(this.service.sendDataDetails() != null){
      this.isLogInNormal = true
      this.client = this.service.sendDataDetails();
    }
  }

  signOutNormal(){
    this.isLogInNormal = false;
    location.reload();
    localStorage.removeItem('token');
    this.service.email = null;
  }
}
