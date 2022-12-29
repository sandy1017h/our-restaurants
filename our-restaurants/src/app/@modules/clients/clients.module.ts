import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsMainViewComponent } from './components/clients-main-view/client-main-view/clients-main-view.component';
import { MaterialModule } from 'src/app/@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClientComponent } from './components/clients-main-view/add-client/add-client.component';
import { EditClientComponent } from './components/clients-main-view/edit-client/edit-client.component';


@NgModule({
  declarations: [
    ClientsMainViewComponent,
    AddClientComponent,
    EditClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
