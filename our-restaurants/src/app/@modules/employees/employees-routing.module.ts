import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmlpoyeeMainViewComponent } from './components/emlpoyee-main-view/emlpoyee-main-view.component';

const routes: Routes = [{
  path:"",redirectTo:"main-view",pathMatch:"full"
},
{path:"main-view",component:EmlpoyeeMainViewComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
