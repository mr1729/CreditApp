import { Component, Input, OnInit } from '@angular/core';
import {Vehicle} from '../shared/vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  @Input()
  v_list: Vehicle[];

  constructor() { }

  ngOnInit(): void {
  }


  

}
