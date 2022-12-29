import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MagmaRoutingModule } from './magma-routing.module';
import { MagmacomponentComponent } from './magmacomponent/magmacomponent.component';
import { MaterialModule } from 'src/app/@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MagmacomponentComponent
  ],
  imports: [
    CommonModule,
    MagmaRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MagmaModule { }
