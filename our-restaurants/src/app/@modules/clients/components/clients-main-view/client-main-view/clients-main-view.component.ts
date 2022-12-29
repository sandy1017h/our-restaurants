import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddClientComponent } from '../add-client/add-client.component';
import { EditClientComponent } from '../edit-client/edit-client.component';

@Component({
  selector: 'app-clients-main-view',
  templateUrl: './clients-main-view.component.html',
  styleUrls: ['./clients-main-view.component.scss']
})
export class ClientsMainViewComponent implements OnInit {


  clientdetails=[
    {name:"HYDERABAD",email:"revanth@gmail.com",phone:6699552211,imagePath:"assets/images/charminarr.png"},
    {name:"BOMBAY",email:"justin@gmail.com",phone:6699552211,imagePath:"assets/images/indiangatee.png"},
    {name:"SECUNDRABAD",email:"amandacerny@gmail.com",phone:6699552211,imagePath:"assets/images/charminarr.png"},
    {name:"MUMBAI",email:"jhonwoo@gmail.com",phone:6699552211,imagePath:"assets/images/indiangatee.png"},
  ]
    
  constructor( public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onclickaddclientopen(){
    this.dialog.open(AddClientComponent,{panelClass:"full-screen-dialog"})
  }

  onclickeditclientopen(){
    this.dialog.open(EditClientComponent,{panelClass:"full-screen-dialog"})
  }

}
