import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { saveEmployeeeditIncomingModel } from '../service/update-employee-save.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employeeeditformgroup!:FormGroup
  hide=true
  
  constructor(public closeButton:MatDialogRef<EditEmployeeComponent>) { }

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
     comments: new FormControl("",[Validators.required,Validators.maxLength(30)])

     
    })


  }

  onclickupdateFN(){

  let payload:saveEmployeeeditIncomingModel={
    branchidswithcommasepareted: this.employeeeditformgroup.value.branchidswithcommasepareted,
    branchnameswithcommasepareted: this.employeeeditformgroup.value.branchnameswithcommasepareted,
    buildingname: this.employeeeditformgroup.value.buildingname,
    comments: this.employeeeditformgroup.value.comments,
    doororflatnumber: this.employeeeditformgroup.value.doororflatnumber,
    employeecity: this.employeeeditformgroup.value.city,
    employeedesignation: this.employeeeditformgroup.value.employeedesignation,
    employeedetailsiduniquekey: this.employeeeditformgroup.value.employeedetailsiduniquekey,
    employeedob: +moment(this.employeeeditformgroup.value.dateofbirth).format("YYYYMMDD"),
    employeefirstname: this.employeeeditformgroup.value.firstname,
    employeelastname: this.employeeeditformgroup.value.lastname,
    employeelocality: this.employeeeditformgroup.value.locality,
    employeemarriagedate: +moment(this.employeeeditformgroup.value.marriagedate).format("YYYYMMDD"),
    employeename: this.employeeeditformgroup.value.employeename,
    employeepassword: this.employeeeditformgroup.value.password,
    employeepermissiontypeid: this.employeeeditformgroup.value.employeepermissiontypeid,
    employeeprimaryemailaddress: this.employeeeditformgroup.value.primaryemailaddress,
    employeeprimaryphonenumber: this.employeeeditformgroup.value.primaryphonenumber,
    employeesecondaryemailaddress: this.employeeeditformgroup.value.secondaryemailaddress,
    employeesecondaryphonenumber: this.employeeeditformgroup.value.secondaryphonenumber,
    employeestate: this.employeeeditformgroup.value.state,
    employeesupervisor: this.employeeeditformgroup.value.employeesupervisor,
    organizationidpartitionkey: this.employeeeditformgroup.value.organizationidpartitionkey,
    street: this.employeeeditformgroup.value.street,
    zip: this.employeeeditformgroup.value.zip,
    organizationname: ''
  }

  console.log(payload)
}

onclickclose(){
  this.closeButton.close()
}
}
