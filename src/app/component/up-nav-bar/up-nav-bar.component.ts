import { Component, Injectable, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { catchError } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Client } from 'src/app/model/client.model';
import { clientService } from 'src/app/services/client.service';
import { CartItem } from 'src/app/model/cartItem';
import { Panier } from 'src/app/model/panier';
import { CartService } from 'src/app/services/cart.service';
import { panierservice } from 'src/app/services/panierservice.service';
import { SharedService } from 'src/app/shared/shared.service';

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
  
  errorMsg: string= "cc";
  panierexp: Panier={
    id:55
  };
  panierexpid!:number;
  data: any;
  panierid: number=0;
  carttemp: CartItem={
    component:"",
    quantity: 0
  };
  carttemps:CartItem[]=[];
  objectitems: any;
  constructor(public app:AppComponent, private authService: SocialAuthService,private panierService:CartService,private sharedservice:SharedService,private panservice:panierservice, private service: clientService ) {
    this.ngOnInit();
    console.log("shared service panier id",this.panierexpid);
    console.log("First one");
    console.log("id panier=");
    this.panierService.getpanierpclient(1).subscribe((res:any) => {
      this.panierid=res.id;
      this.sharedservice.setPaniernumber(this.panierid);
    this.panierService.getligneoaniercommandes(this.panierid).subscribe((data:any)=>{
      console.log(data);
     console.log(data._embedded.lignePanierCommandes);
     this.objectitems=data._embedded.lignePanierCommandes;
     console.log("object lists",this.objectitems);
     this.objectitems.forEach((element: any) => {
      this.panierService.getcomposantlignepanier(element._links.composant.href).subscribe((data:any)=>{
        console.log(data);
      this.carttemp=new CartItem(data);
      this.carttemp.quantity= element.quantity;
      console.log(this.carttemp);
      this.carttemps.push(this.carttemp);
      this.panservice.addtoCartfirst(this.carttemp);
      })
     });
       this.sharedservice.setcartitems(this.carttemps);

    });

  });

    


  }
  ngOnInit(): void {
    console.log("Second one");
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

