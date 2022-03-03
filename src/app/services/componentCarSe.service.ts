
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ComponentCar} from '../model/componentCar.model'
@Injectable({providedIn:"root"})
export class ComponentCarSe{
    constructor(private http:HttpClient){} 
    
    getComponent():Observable<ComponentCar[]>{
        let host = environment.host2;

        return this.http.get<ComponentCar[]>(host+"/composants");
    }
    
    getcategorie(id:number): Observable<any> {
        let host = environment.host2;
        return this.http.get(host+"/composants/"+id+"/categories")
    }

}