import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddbranchesComponent } from '../addbranches/addbranches.component';
import { EditBranchesComponent } from '../edit-branches/edit-branches.component';

@Component({
  selector: 'app-branches-main-view',
  templateUrl: './branches-main-view.component.html',
  styleUrls: ['./branches-main-view.component.scss']
})
export class BranchesMainViewComponent implements OnInit {
  mat= [
    {
      name1:"MRGS SYSTEMS",
      name2:"KUKATPALLY",
      phone:"7878787878",
      email:"revanthsai@gmail.com"
    },
    {
      name1:"NIT HIC Info.",
      name2:"TADEPALLI,Andhra Pradesh",
      phone:"8877887788",
      email:"reevanthsao@gmail.com"
    }
 ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onclickopenaddbranches(){
    this.dialog.open(AddbranchesComponent,{panelClass:"full-screen-dialog"})
  }
  onclickopeneditbranches(){
    this.dialog.open(EditBranchesComponent,{panelClass:"full-screen-dialog"})
  }
}
