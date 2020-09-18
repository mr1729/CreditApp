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
  
  constructor(public zipservice: VehicleinzipService) { }

  ngOnInit(): void {
  }

  clickfunction(){  

   this.vehicles = [{name: "Hello",
   model: "Hello",
   type: "Hello",
   year: 2018,
   price: 65000,
   destination_charges:995}];

   this.zip = "75039";
   this.vehicles = this.zipservice.getVehiclesinZip(this.zip);

  }
 
}
