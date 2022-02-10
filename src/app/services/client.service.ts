import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from "../model/client.model";

@Injectable({providedIn:"root"})
export class clientService{
    constructor(private http:HttpClient){}

    save(client:Client):Observable<any>{
        let host=environment.host2;
        return this.http.post<Client>(host+"/login", client);
      }
}