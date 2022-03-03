import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../model/client.model';
import { LignePanierCommande } from '../model/lignepaniercommande';
import { ListligneCommande } from '../model/Listlignecommande';
import { Panier } from '../model/panier';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  save(cm: Panier): Observable<any> {
    let host = environment.host2;
    console.log("yes");
    console.log(this.http.post(host+"/paniers/",JSON.stringify(cm),this.httpOptions));
    return this.http.post(host+"/paniers/",JSON.stringify(cm),this.httpOptions).pipe(
      catchError(err=>{
        console.error('error cought in creation', err)
         return err;
      }) )
}
   


  getclientpanier(id:number):Observable<any>{
  let host = environment.host2;
  return this.http.get(host +'/paniers/'+ id+'/client');
  }
  
  private handleError(error: HttpErrorResponse) {
    if(error.status===0){
      console.error('an error client:',error.error)
    }
    else{
      console.error('backend error ${error.status} , body was:',error.error);
    }
    
    return throwError(() => new Error('Something bad happend'))
  }
  
  getpanier(id:number):Observable<any>{
    let host = environment.host2;
    return this.http.get<any>(host+"/paniers/"+id);
   }
   getpanierpclient(id:number):Observable<any>{
     let host = environment.host2;
     return this.http.get<any>(host+"/clients/"+id+"/panier");
   }

   savepaniercommande(lignepaniercommande:LignePanierCommande):Observable<any>{
    let host = environment.host2;
    console.log("here save panier");
    console.log("json:"+ JSON.stringify(lignepaniercommande))
    return this.http.post(host+"/lignePanierCommandes/", JSON.stringify(lignepaniercommande), this.httpOptions)

   }

   getligneoaniercommandes(id:number):Observable<any>{
    let host = environment.host2;
    return this.http.get(host+"/paniers/"+id+"/lignePanierCommandes");
   }


  getcomposantlignepanier(component:string):Observable<any>{
    let host = environment.host2;
    return this.http.get<any>(component); 
  }
  
   updatepaniercommande(lignepaniercommande:LignePanierCommande,id:number):Observable<any>{
    let host = environment.host2;
    console.log("here update panier");
    console.log("id=",id);
    console.log("json:"+ JSON.stringify(lignepaniercommande))
    return this.http.put(host + '/lignePanierCommandes/'+ id, JSON.stringify(lignepaniercommande), this.httpOptions)
   }

    deletepaniercommande(id:number):Observable<any>{
    let host = environment.host2;
    console.log("here delete panier");
    console.log("id=",id);
    return this.http.delete(host + '/lignePanierCommandes/'+id, this.httpOptions);
   }


}
