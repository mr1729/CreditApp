import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../shared/vehicle';
import {VehicleinzipService} from '../service/vehicleinzip.service';

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
  
  constructor(public zipservice: VehicleinzipService) { }

  ngOnInit(): void {
  }

  clickfunction(){  

    if(this.zip){
     this.vehicles = [{name: "Hello",
                       model: "Hello",
                       type: "Hello",
                       year: 2018,
                       price: 65000,
                       destination_charges:995,
                      image_url: "../assets/img"
                     }];

   
   this.vehicles = this.zipservice.getVehiclesinZip(this.zip);

   this.sortlists();
   }
   else{
     this.zip ="75039";
   }

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
