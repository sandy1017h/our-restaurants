import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesMainViewComponent } from './branches-main-view/branches-main-view.component';
import { MaterialModule } from 'src/app/@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddbranchesComponent } from './addbranches/addbranches.component';
import { EditBranchesComponent } from './edit-branches/edit-branches.component';



@NgModule({
  declarations: [
    BranchesMainViewComponent,
    AddbranchesComponent,
    EditBranchesComponent,
  ],
  imports: [
    CommonModule,
    BranchesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class BranchesModule { }
