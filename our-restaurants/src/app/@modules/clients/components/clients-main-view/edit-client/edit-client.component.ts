import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { updateClientDetailsIncomingModel } from '../services/update.service';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  employeeeditformgroup!:FormGroup
  hide=true

  constructor(public closeButton:MatDialogRef<EditClientComponent>) { }


  ngOnInit(): void {

    this.employeeeditformgroup=new FormGroup({
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
     
    })

  }

  onclickupdateFN(){
    let payload:updateClientDetailsIncomingModel={
      organizationclientdetailsiduniquekey:this.employeeeditformgroup.value.organizationclientdetailsiduniquekey,
      clientlastname:this.employeeeditformgroup.value.lastname,
      clientfirstname:this.employeeeditformgroup.value.firstname,
      clientdob:+moment(this.employeeeditformgroup.value.dateofbirth).format("YYYYMMDD"),
      clientmarriagedate:+moment(this.employeeeditformgroup.value.marriagedate).format("YYYYMMDD"),
      buildingname:this.employeeeditformgroup.value.buildingname,
      clientcity:this.employeeeditformgroup.value.city,
      clientlocality:this.employeeeditformgroup.value.locality,
      clientprimaryemailaddress: this.employeeeditformgroup.value.primaryemail,
      clientprimaryphonenumber:this.employeeeditformgroup.value.primarymobilenumber,
      clientsecondaryemailaddress:this.employeeeditformgroup.value.secondaryemail,
      clientsecondaryphonenumber:this.employeeeditformgroup.value.secondarymobilenumber,
      comments:this.employeeeditformgroup.value.comments,
      doororflatnumber:this.employeeeditformgroup.value.doororflatnumber,
      street: this.employeeeditformgroup.value.street,
      zip:this.employeeeditformgroup.value.zip,
      clientstate: this.employeeeditformgroup.value.state,
  }
console.log(payload)

  }
  onclickclose(): void{
    this.closeButton.close()
  }
}
