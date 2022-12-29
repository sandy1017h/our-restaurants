import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiningComponent } from '../dining/dining.component';
import { HomeDeliveryComponent } from '../home-delivery/home-delivery.component';
import { TakeawayComponent } from '../takeaway/takeaway.component';

@Component({
  selector: 'app-cashierdboard',
  templateUrl: './cashierdboard.component.html',
  styleUrls: ['./cashierdboard.component.scss']
})
export class CashierdboardComponent implements OnInit {
  
cashierdashboard=[
  {item1:"123",
item2:"125",
item3:"325",
item4:"339"},

{item1:"199",
item2:"147",
item3:"108",
item4:"323"},

{item1:"150.6",
item2:"121",
item3:"252",
item4:"652"},

 
]
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

 onclicktakeawayopen(){
 
  this.dialog.open(TakeawayComponent,{panelClass:"full-screen-dialog"})
}


onclickdiningopen(){
  this.dialog.open( DiningComponent , {panelClass:"full-screen-dialog"})
}

onclickhomedeliveryopen(){
  this.dialog.open(HomeDeliveryComponent, {panelClass:"full-screen-dialog"})
}

}
