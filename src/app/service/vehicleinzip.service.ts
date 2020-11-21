import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vehicle} from '../shared/vehicle';


@Injectable({
  providedIn: 'root'
})
export class VehicleinzipService {

  v: Vehicle[];
  s: any;
  constructor(private call:HttpClient){ }

  getVehiclesinZip(Zip:string){

       if(Zip){
         this.call.get<Vehicle[]>("http://localhost:8080/vehiclelist")
                 .subscribe(veh => this.v=veh);   
       }
       return this.v;
  }    

  getZips(): any {
     this.call.get<any>("http://localhost:8080/get")
              .subscribe(st => this.s=st);
             
              return this.s;
  }
     
}
