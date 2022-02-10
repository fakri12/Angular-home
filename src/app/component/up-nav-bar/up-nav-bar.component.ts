import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-up-nav-bar',
  templateUrl: './up-nav-bar.component.html',
  styleUrls: ['./up-nav-bar.component.css']
})
export class UpNavBarComponent implements OnInit {

  user!:SocialUser;
  isLogIn = false;
  
  constructor(public app:AppComponent, private authService: SocialAuthService ) {
    
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
}
