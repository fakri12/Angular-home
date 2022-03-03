import { ComponentCar } from "./componentCar.model";
import { Panier } from "./panier";

export interface LignePanierCommande{
    id:number;
    composant:String;
    quantity:number;
    panier:String;
    commande:string;
    _links:{
        composant:{
            href:"";
        }
    };
}