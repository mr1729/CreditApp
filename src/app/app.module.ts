import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleSelectionComponent } from './vehicle-selection/vehicle-selection.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { DealerFinancingComponent } from './dealer-financing/dealer-financing.component';
import {MatExpansionModule} from '@angular/material/expansion';
//import {MatAccordion} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    VehicleSelectionComponent,
    ApplicantDetailsComponent,
    DealerFinancingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
