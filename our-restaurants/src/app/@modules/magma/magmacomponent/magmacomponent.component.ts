import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-magmacomponent',
  templateUrl: './magmacomponent.component.html',
  styleUrls: ['./magmacomponent.component.scss']
})
export class MagmacomponentComponent implements OnInit {

  isElement!: number;
  grades: any = ""
  page1formgroup!:FormGroup
  page2formgroup!:FormGroup

 

  constructor() {





    
    this.onclick(1);
  }
  onclick(number: number) {
    this.isElement = number;
  }


  ngOnInit(): void {

    this.page1formgroup=new FormGroup({

      policystart: new FormControl("",[Validators.required,]),
      policyend: new FormControl("",[Validators.required,]),
      policytimestart: new FormControl("",[Validators.required,]),
      policytimeend: new FormControl("",[Validators.required,]),
      transactiontype: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
      customername: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),

    })

    this.page2formgroup=new FormGroup({
      
      policystart: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
      policyend: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),

    })
    
 }
 
  calculate() {
    if (this.grades) {
      if (this.grades <= 100 && this.grades >= 80) {
        this.grades = "A";
      } else if (this.grades <= 79 && this.grades >= 60) {
        this.grades = "B";
      } else if (this.grades <= 59 && this.grades >= 40) {
        this.grades = "C";
      } else {
        this.grades = "D";
      }

    }
  }
}