import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MagmacomponentComponent } from './magmacomponent/magmacomponent.component';

const routes: Routes = [
  {
    path:"magmaC", component:MagmacomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MagmaRoutingModule { }
