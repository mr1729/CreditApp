import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../shared/vehicle';
import {VehicleinzipService} from '../service/vehicleinzip.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.scss']
})
export class VehicleSelectionComponent implements OnInit {

  vehicles: Vehicle[];
  zip:string;
  car_list: Vehicle[];
  truck_list: Vehicle[];
  suv_list: Vehicle[];
  hybrid_list: Vehicle[];
  
  s: string[] = ['name','maim'];

  logger:Observable<any>;

  constructor(public zipservice: VehicleinzipService) { }

  ngOnInit(): void {
    this.s=this.zipservice.getZips();
    console.log(this.s);
  }

  clickfunction(){  
    console.log(this.s);
    

    if(this.zip){
     this.vehicles = [{name: "86",
                       model: "Hello",
                       type: "car",
                       year: 2018,
                       price: 65000,
                       destination_charges:995,
                      image_url: "../assets/img/car/86.png"
                     }];

   //this.vehicles = this.zipservice.getVehiclesinZip(this.zip);

   this.sortlists();
   
   }
   else{
     this.zip ="75039";
     
   }

  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.s.filter(option => option.indexOf(filterValue) === 0);
  }


  sortlists(){

    if(this.vehicles){
        this.car_list = this.vehicles.filter(a => a.type === "car");
        this.truck_list = this.vehicles.filter(a => a.type === "truck");
        this.suv_list = this.vehicles.filter(a => a.type==="suv");
        this.hybrid_list = this.vehicles.filter(a => a.type==="hybrid");
    }

      this.vehicles = [{name: "Hello",
                       model: "Hello",
                       type: "Hello",
                       year: 2018,
                       price: 65000,
                       destination_charges:995,
                      image_url: "../assets/img"
                     }];

  }
 
}
