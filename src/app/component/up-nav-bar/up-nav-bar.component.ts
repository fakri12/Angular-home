import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { catchError } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
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
export class UpNavBarComponent implements OnInit {

  user!:SocialUser;
  isLogIn = false;
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
  constructor(public app:AppComponent, private authService: SocialAuthService,private panierService:CartService,private sharedservice:SharedService,private panservice:panierservice ) {
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

}