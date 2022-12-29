import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmlpoyeeMainViewComponent } from './components/emlpoyee-main-view/emlpoyee-main-view.component';
import { MaterialModule } from 'src/app/@shared/material/material.module';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumbersComponent } from './components/numbers/numbers.component';


@NgModule({
  declarations: [
    EmlpoyeeMainViewComponent,
    EmployeeAddComponent,
    EditEmployeeComponent,
    NumbersComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  
    
  ]
})
export class EmployeesModule { }
