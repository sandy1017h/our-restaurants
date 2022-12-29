import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierdboardComponent } from './cashierdboard/cashierdboard.component';

const routes: Routes = [
{
  path:"cashierdashboardC", component:CashierdboardComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierDashboardRoutingModule { }
