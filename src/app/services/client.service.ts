import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UpNavBarComponent } from "../component/up-nav-bar/up-nav-bar.component";
import { Client } from "../model/client.model";

@Injectable({providedIn:"root"})
export class clientService{

  helper = new JwtHelperService();

  public jwt:any;
  public client!:Client
  public email:any;
    constructor(private http:HttpClient){
      if(localStorage.getItem('token')){
        this.loadToken();
        this.loadUserDetails().subscribe(data =>{
          this.client = data;
        })
      }
    }

    save(client:Client):Observable<any>{
        let host=environment.host2;
        return this.http.post<Client>(host+"/client", client);
      }
      saveToken(jwt:string){
        this.jwt = jwt;
        localStorage.setItem('token',jwt);
        this.email = this.helper.decodeToken(this.jwt)['sub'];
      }
      loadToken(){
        this.jwt = localStorage.getItem('token');
        this.email = this.helper.decodeToken(this.jwt)['sub'];
      }
      logout(){
        this.jwt = null;
        localStorage.removeItem('token');
        this.email = null;
      }
      login(client:Client):Observable<any>{
        let host=environment.host2;
        return this.http.post<Client>(host+"/login", client, {observe:'response'});
      }

      loadUserDetails():Observable<Client>{
        let host=environment.host2;

        let email = {"email":this.email};
        return this.http.post<Client>(host+"/client/getClient",email, {headers: new HttpHeaders({'Authorization':this.jwt})});
      }
      sendDataDetails(){
          return this.client;
      }

      verification(code2:String):Observable<any>{
        let host=environment.host2;
        let code = {"code":code2};
        return this.http.post<any>(host+"/client/verify", code);
      }
}