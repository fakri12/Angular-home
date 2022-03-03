import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { CartItem } from "../model/cartItem";
import { LignePanierCommande } from "../model/lignepaniercommande";
import { SharedService } from "../shared/shared.service";
import { CartService } from "./cart.service";

@Injectable({
  providedIn: 'root'
})
export class panierservice{
    cartitems: CartItem[]=[];
    composanttemp:any;
    responsehttp:any;
    listlignetemp:LignePanierCommande[]=[];
    lignecommandepaniertemp:LignePanierCommande={
      id: 0,
      composant: "",
      panier: "",
      quantity: 0,
      commande: "",
      _links: {
        composant: {
          href:""
        }
      }
    };
    totalPrice!: number;
    totalQuantity!: number;
    num: number=0;

    constructor(private sharedservice:SharedService,public cartservice:CartService) { 
          }



   addtoCartfirst(thecartitem:CartItem ){
      console.log("thecartitem",thecartitem);
    this.cartitems.push(thecartitem);

    this.computeCartTotals();
   }













    addtoCart(thecartitem:CartItem ){
      console.log("entered the addtocart");
        let alreadyExistsInCart:boolean=false;
        let existingCartItem!:CartItem;

        if(this.cartitems.length>0){
            for(let tempcartitem of this.cartitems){
              console.log("entered 1");
                if(tempcartitem.component.id===thecartitem.component.id){
                  console.log("entered 2");
                  console.log("id temp",tempcartitem.component.id);
                  console.log("id cart",thecartitem.component.id);
                    existingCartItem= tempcartitem;
                    break;
                }
            }
        }

        alreadyExistsInCart=(existingCartItem!= undefined);

        
        if(alreadyExistsInCart){
          console.log("entered 3");
          this.updatetoCartin(existingCartItem);
        }

        else{
          console.log("entered 4");
            this.cartitems.push(thecartitem);
            this.lignecommandepaniertemp.composant="http://localhost:8080/composants/"+thecartitem.component.id;
            console.log("number panier"+this.sharedservice.getPaniernumber());
            this.lignecommandepaniertemp.panier="http://localhost:8080/paniers/"+this.sharedservice.getPaniernumber();
            this.lignecommandepaniertemp.quantity=thecartitem.quantity;
            this.lignecommandepaniertemp.id=thecartitem.component.id;
           console.log(this.lignecommandepaniertemp);


           this.responsehttp = this.cartservice.savepaniercommande(this.lignecommandepaniertemp);
           this.responsehttp.subscribe((data:any)=>{
                  console.log(data);
           })

           this.findpaniercommande(this.sharedservice.getPaniernumber(),thecartitem.component.id);
         }

        this.sharedservice.setcartitems(this.cartitems);

        this.computeCartTotals();
      
    }

     updatetoCartin(thecartitem:CartItem){
      console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHH First update");
      for(let tempcartitem of this.cartitems){
         if(tempcartitem.component.id===thecartitem.component.id){
           console.log("Moohiim 3",tempcartitem.component.id);
          tempcartitem.quantity=tempcartitem.quantity+1;
          this.lignecommandepaniertemp.quantity=tempcartitem.quantity;
          break;
          }
       }
       console.log(this.cartitems);
       this.sharedservice.setcartitems(this.cartitems);
       this.lignecommandepaniertemp.composant="http://localhost:8080/composants/"+thecartitem.component.id;
       this.lignecommandepaniertemp.panier="http://localhost:8080/paniers/"+this.sharedservice.getPaniernumber();
       console.log("num panier",this.sharedservice.getPaniernumber()); 
       console.log("idcart",thecartitem.component.id);
       this.lignecommandepaniertemp.id= thecartitem.component.id;
       console.log("ligne commande",this.lignecommandepaniertemp.id);
       console.log("salam",this.lignecommandepaniertemp);
       this.responsehttp=this.cartservice.updatepaniercommande(this.lignecommandepaniertemp,this.lignecommandepaniertemp.id);
       this.responsehttp.subscribe((data:any)=>{
        console.log(data);
        })
       this.computeCartTotals();
     }
    
     updatetoCartde(thecartitem:CartItem){
      for(let tempcartitem of this.cartitems){
         if(tempcartitem.component.id===thecartitem.component.id){
          tempcartitem.quantity=tempcartitem.quantity-1;
          if(tempcartitem.quantity<0) tempcartitem.quantity=0;
          this.lignecommandepaniertemp.quantity=tempcartitem.quantity;
          break;
          }
       }
       console.log(this.cartitems);
       this.sharedservice.setcartitems(this.cartitems);
       this.lignecommandepaniertemp.composant="http://localhost:8080/composants/"+thecartitem.component.id;
       this.lignecommandepaniertemp.panier="http://localhost:8080/paniers/"+this.sharedservice.getPaniernumber();
       console.log("num panier",this.sharedservice.getPaniernumber()); 
       console.log("idcart",thecartitem.component.id);
       this.lignecommandepaniertemp.id= thecartitem.component.id;
       console.log("ligne commande",this.lignecommandepaniertemp.id);
       console.log("salam",this.lignecommandepaniertemp);
       this.responsehttp=this.cartservice.updatepaniercommande(this.lignecommandepaniertemp,this.lignecommandepaniertemp.id);
       this.responsehttp.subscribe((data:any)=>{
        console.log(data);
        })
       this.computeCartTotals();
     }

   


   computeCartTotals(){
    console.log("entered fin");

       let totalPriceValue:number=0;
       let totalQuantityValue:number=0;
  
    for(let currentCartItem of this.cartitems){
        totalPriceValue +=currentCartItem.quantity*currentCartItem.component.price;
        totalQuantityValue+=currentCartItem.quantity;
    }
    
    this.sharedservice.settotalprice(totalPriceValue);
    this.sharedservice.settotalquantity(totalQuantityValue);
    


    this.logCartData(totalPriceValue, totalQuantityValue);


}


deletetoCart(id:number){

  this.cartitems.forEach((value,index)=>{
    if(value.component.id===id) this.cartitems.splice(index,1);
});

this.sharedservice.setcartitems(this.cartitems);
console.log("I am here in delete");
this.responsehttp=this.cartservice.deletepaniercommande(id);

this.responsehttp.subscribe((data:any)=>{
  console.log("responde delete",data);
})

this.computeCartTotals();

}






logCartData(totalPriceValue: number, totalQuantityValue: number) {

  console.log('Contents of the cart');
  for (let tempCartItem of this.cartitems) {
    const subTotalPrice = tempCartItem.quantity * tempCartItem.component.price;
    console.log(`name: ${tempCartItem.component.name}, quantity=${tempCartItem.component.quantity}, unitPrice=${tempCartItem.component.price}, subTotalPrice=${subTotalPrice}`);
  }

  console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
  console.log('----');
}
   

findpaniercommande(idpanier:number,idcomposant:number){
  console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHH First find panier commande");
  console.log("idpanier",idpanier);
  console.log("idcomposant",idcomposant)

  this.cartservice.getligneoaniercommandes(idpanier).subscribe((data:any)=>{
    console.log("entered here");
    this.listlignetemp=data._embedded.lignePanierCommandes;
    console.log(data._embedded.lignePanierCommandes);
    console.log("here i see"+this.listlignetemp);

    for(let temp of this.listlignetemp){
      console.log("entered the loop");
      this.cartservice.getcomposantlignepanier(temp._links.composant.href).subscribe( (data:any)=>{
        this.composanttemp=data;
        console.log("le composant update: "+data);
        if(idcomposant===this.composanttemp.id){
          console.log("id from find paniercommande"+idcomposant);
          console.log("tempid",temp.id);
          this.num=temp.id;
          
          console.log("le numero",this.num);
      }
 
      })
         
    }

  })
  if(this.num===0) {
    console.log("num",this.num);
    }
  console.log("la reponse",this.responsehttp);
  console.log("RAK NADI");

}





}




