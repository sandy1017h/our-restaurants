import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { saveEmployeeaddIncomingModel } from '../service/employee-add-save.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employeeaddformgroup!:FormGroup
  
hide=true
  
constructor(public closeButton:MatDialogRef<EmployeeAddComponent>) { }

  ngOnInit(): void {

    this.employeeaddformgroup=new FormGroup({
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
     designation: new FormControl("",[Validators.required]),
     branchname: new FormControl("",[Validators.required]),
     comments: new FormControl("",[Validators.required,Validators.maxLength(50)])
    })

  }

  onclicksaveFN(){
    let payload:saveEmployeeaddIncomingModel={
  employeelastname: this.employeeaddformgroup.value.lastname,
  employeefirstname:this.employeeaddformgroup.value.firstname,
  employeedob:+moment( this.employeeaddformgroup.value.dateofbirth).format("DDMMYYYY"),
  employeemarriagedate: +moment( this.employeeaddformgroup.value.marriagedate).format("YYYYMMDD"),
  branchnameswithcommasepareted:this.employeeaddformgroup.value.branchname,
  branchidswithcommasepareted: 223,
  employeeprimaryphonenumber: this.employeeaddformgroup.value.primarymobilenumber,
  employeesecondaryphonenumber: this.employeeaddformgroup.value.secondarymobilenumber,
  employeeprimaryemailaddress: this.employeeaddformgroup.value.primaryemail,
  employeesecondaryemailaddress: this.employeeaddformgroup.value.secondaryemail,
  employeelocality: this.employeeaddformgroup.value.locality,
  employeestate: this.employeeaddformgroup.value.state,
  employeecity: this.employeeaddformgroup.value.city,
  zip: this.employeeaddformgroup.value.zip,
  doororflatnumber: this.employeeaddformgroup.value.doororflatnumber,
  buildingname: this.employeeaddformgroup.value.buildingname,
  street: this.employeeaddformgroup.value.street,
  employeedesignation: this.employeeaddformgroup.value.designation,
  employeesupervisor:this.employeeaddformgroup.value.designation,
  comments:this.employeeaddformgroup.value.comments,
  employeepassword: this.employeeaddformgroup.value.password,
  employeepermissiontypeid: 555,
      
    }
    console.log(payload)
  }

  
  onclickclose(){
    this.closeButton.close()
  }
  
}

