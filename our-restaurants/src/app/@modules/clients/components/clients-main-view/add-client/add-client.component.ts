import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { saveClientAddIncomingModel } from '../services/add-client-save.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  clientaddformgroup!:FormGroup
  hide=true
  constructor(public closeButton:MatDialogRef<AddClientComponent>) { }

  ngOnInit(): void {
    this.clientaddformgroup=new FormGroup({
      lastname: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
      firstname: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
      dateofbirth: new FormControl("",[Validators.required]),
      marriagedate: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required,Validators.maxLength(12)]),
      primarymobilenumber: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      secondarymobilenumber: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      primaryemail: new FormControl("",[Validators.email,Validators.maxLength(30)]),
      secondaryemail: new FormControl("",[Validators.email,Validators.maxLength(30)]),
     doororflatnumber: new FormControl("",[Validators.required,Validators.maxLength(10)]),
     buildingname: new FormControl("",[Validators.required,Validators.maxLength(15)]),
     street: new FormControl("",[Validators.required,Validators.maxLength(15)]),
     locality: new FormControl("",[Validators.required,Validators.maxLength(15)]),
     city:new FormControl("",[Validators.required,Validators.maxLength(15)]),
     state: new FormControl("",[Validators.required,Validators.maxLength(15)]),
     zip: new FormControl("",[Validators.required,Validators.maxLength(6)]),
     comments: new FormControl("",[Validators.required,Validators.maxLength(25)]),
     
    })

  }

  onclicksaveFN(){
    let payload:saveClientAddIncomingModel={
      clientlastname:this.clientaddformgroup.value.lastname,
      clientfirstname:this.clientaddformgroup.value.firstname,
      clientdob:+moment( this.clientaddformgroup.value.dateofbirth).format("YYYYMMDD"),
      clientmarriagedate: +moment( this.clientaddformgroup.value.marriagedate).format("YYYYMMDD"),
      clientlocality:this.clientaddformgroup.value.locality,
      clientcity:this.clientaddformgroup.value.city,
      clientdistrict:this.clientaddformgroup.value.city,
      clientstate: this.clientaddformgroup.value.state,
      clientcountry:this.clientaddformgroup.value.city,
      zip:this.clientaddformgroup.value.zip,
      clientprimaryphonenumber: this.clientaddformgroup.value.primarymobilenumber,
      clientsecondaryphonenumber: this.clientaddformgroup.value.secondarymobilenumber,
      clientprimaryemailaddress:this.clientaddformgroup.value.primaryemailaddress,
      clientsecondaryemailaddress: this.clientaddformgroup.value.secondaryemailaddress,
      comments: this.clientaddformgroup.value.comments,
    }
    console.log(payload)
  }

  onclickclose(){
    this.closeButton.close()
  }
}
