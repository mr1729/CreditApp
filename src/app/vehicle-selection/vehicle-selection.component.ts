import { Component, OnInit } from '@angular/core';
import {Vehicle} from '../shared/vehicle';

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.scss']
})
export class VehicleSelectionComponent implements OnInit {

  vehicles: Vehicle[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
