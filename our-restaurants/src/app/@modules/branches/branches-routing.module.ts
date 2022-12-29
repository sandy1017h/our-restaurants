import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchesMainViewComponent } from './branches-main-view/branches-main-view.component';

const routes: Routes = [
  {
    path:"branchesC",component:BranchesMainViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule { }
