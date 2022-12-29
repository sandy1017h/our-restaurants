import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderNavComponent } from "./components/header-nav/header-nav.component";
import { ShellComponent } from "./shell.component";
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../@shared/material/material.module";
import { ShellRoutingModule } from "./shell-routing.module";

@NgModule({
  declarations: [ShellComponent, HeaderNavComponent, SideNavComponent],
  imports: [CommonModule, MaterialModule, ShellRoutingModule],
})
export class ShellModule {}
