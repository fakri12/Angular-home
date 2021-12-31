import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Component:string="Choisir...";

  SousComponentsdata: SousComponent[]=[
    { 
    name: "Embrayage", 
    id: 1,
    type: "Moteur"
  },
  {
    name: "Turbo", 
    id: 2,
    type: "Moteur"
  },
  {
    name: "Injecteur", 
    id: 3,
    type: "Moteur"
  },
  {
    name: "Boujie", 
    id: 4,
    type: "Moteur"
  },
  {
    name: "Culasse", 
    id: 5,
    type: "Moteur"
  },
  {
    name: "PotCatalytique", 
    id: 6,
    type: "échappement"
  },
  {
    name: "échappementsilencieux", 
    id: 7,
    type: "échappement"
  },
  {
    name: "Pneus", 
    id: 8,
    type: "Train-roulant"
  },
  {
    name: "Roulement", 
    id: 9,
    type: "Train-roulant"
  },
  {
    name: "Amortisseur", 
    id: 10,
    type: "Train-roulant"
  },
  {
    name: "Cardans", 
    id: 11,
    type: "Train-roulant"
  },
  {
    name: "Rotule", 
    id: 12,
    type: "Train-roulant"
  },
  {
    name: "Radiateur", 
    id: 13,
    type: "Chaufage"
  },
  {
    name: "PluseurDair", 
    id: 14,
    type: "Chaufage"
  },
  {
    name: "Thermostat", 
    id: 15,
    type: "Chaufage"
  },
  {
    name: "Sonde", 
    id: 16,
    type: "Chaufage"
  },
  {
    name: "Embrayage", 
    id: 17,
    type: "Freinage"
  },
  {
    name: "Disque", 
    id: 18,
    type: "Freinage"
  },
  {
    name: "Plaquettes", 
    id: 19,
    type: "Freinage"
  }
  ];
  }
  //we can create a class outside app.component
  class SousComponent{
    name:string="";
    id: number=0;
    type:String="";
  }