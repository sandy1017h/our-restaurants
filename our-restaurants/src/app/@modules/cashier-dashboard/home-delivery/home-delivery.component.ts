import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-home-delivery',
  templateUrl: './home-delivery.component.html',
  styleUrls: ['./home-delivery.component.scss']
})
export class HomeDeliveryComponent implements OnInit {

  homedeliveryformgroup!:FormGroup

  constructor() { }

  ngOnInit(): void {

    this.homedeliveryformgroup=new FormGroup({
      mobile: new FormControl("",[Validators.required,Validators.maxLength(10)]),
      firstname: new FormControl("",[Validators.required]),
      lastname: new FormControl("",[Validators.required]),
      dob: new FormControl("",[Validators.required]),
      mdate: new FormControl("",[Validators.required]),
      door: new FormControl("",[Validators.required]),
      buildingname: new FormControl("",[Validators.required]),
      street: new FormControl("",[Validators.required]),
      locality: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      

    })
  }

}
