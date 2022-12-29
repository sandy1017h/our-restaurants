import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';


@Component({
  selector: 'app-emlpoyee-main-view',
  templateUrl: './emlpoyee-main-view.component.html',
  styleUrls: ['./emlpoyee-main-view.component.scss']
})
export class EmlpoyeeMainViewComponent implements OnInit {


      employeedetails=[
      {name:"REVANTH",email:"revanth@gmail.com",phone:7878784141,imagePath:"assets/images/male.png"},
      {name:"JUSTIN",email:"justin@gmail.com",phone:7878784141,imagePath:"assets/images/male.png"},
      {name:"AMANDA",email:"amandacerny@gmail.com",phone:7878784141,imagePath:"assets/images/lady.png"},
      {name:"JHON WOO",email:"jhonwoo@gmail.com",phone:7878784141,imagePath:"assets/images/male.png"},
      
      {name:"ROBERT",email:"robert@gmail.com",phone:7878784141,imagePath:"assets/images/male.png"},
      {name:"SCARLETT",email:"james@gmail.com",phone:7878784141,imagePath:"assets/images/lady.png"},
       {name:"STEVE",email:"steve@gmail.com",phone:7878784141,imagePath:"assets/images/male.png"},
      {name:"BANNER",email:"banner@gmail.com",phone:7878784141,imagePath:"assets/images/male.png"},

      ]
       
      
      
  constructor (public dialog:MatDialog) { }
  

  ngOnInit(): void {    
  }


  
  onclickaddemployeeopen(){
      this.dialog.open(EmployeeAddComponent,{panelClass:"full-screen-dialog"})
  }

onclickeditemployeeopen(){
  this.dialog.open(EditEmployeeComponent,{panelClass:"full-screen-dialog"})
}




}


  