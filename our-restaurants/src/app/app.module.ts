import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from './shell/shell.module';
import { MaterialModule } from './@shared/material/material.module';
import { MatCardModule } from "@angular/material/card";
import { FormsModule } from '@angular/forms';
import { CashierDashboardModule } from './@modules/cashier-dashboard/cashier-dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShellModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    FormsModule,
    CashierDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
