import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientsMainViewComponent } from "./components/clients-main-view/client-main-view/clients-main-view.component";

const routes: Routes = [
  { path: "", redirectTo: "main-view", pathMatch: "full" },
  {
    path: "main-view",
    component: ClientsMainViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
