import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierDashboardRoutingModule } from './cashier-dashboard-routing.module';
import { CashierdboardComponent } from './cashierdboard/cashierdboard.component';
import { MaterialModule } from 'src/app/@shared/material/material.module';
import { TakeawayComponent } from './takeaway/takeaway.component';
import { DiningComponent } from './dining/dining.component';
import { HomeDeliveryComponent } from './home-delivery/home-delivery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CashierdboardComponent,
    TakeawayComponent,
    DiningComponent,
    HomeDeliveryComponent,
  
    
  
  
  
  
  ],
  imports: [
    CommonModule,
    CashierDashboardRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class CashierDashboardModule { }
