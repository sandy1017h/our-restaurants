import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { saveBranchAddIncomingModel } from '../services/add-branches-save.service';
import { BranchesMainViewComponent } from '../branches-main-view/branches-main-view.component';


@Component({
  selector: 'app-addbranches',
  templateUrl: './addbranches.component.html',
  styleUrls: ['./addbranches.component.scss']
})
export class AddbranchesComponent implements OnInit {
  branchesaddformgroup!:FormGroup
  constructor(public dialogRef:MatDialogRef<BranchesMainViewComponent>) { }
  ngOnInit(): void {
    this.branchesaddformgroup=new FormGroup({
     branchname:new FormControl("",[Validators.required]),
     gstnumber:new FormControl("",[Validators.required]),
     primarymobileno:new FormControl("",[Validators.required,Validators.maxLength(10)]),
     secondarymobileno:new FormControl("",[Validators.required,Validators.maxLength(10)]),
     primaryemailaddress:new FormControl("",[Validators.email,Validators.maxLength(10)]),
     secondaryemailaddress:new FormControl("",[Validators.email]),
     pinyourlocation:new FormControl("",[Validators.required]),
     loclity:new FormControl("",[Validators.required]),
     city:new FormControl("",[Validators.required]),
     state:new FormControl("",[Validators.required]),
     street:new FormControl("",[Validators.required]),
     district:new FormControl("",[Validators.required]),
     country:new FormControl("",[Validators.required]),
     zip:new FormControl("",[Validators.required]),
     weektime1:new FormControl("",[Validators.required]),
     weektime2:new FormControl("",[Validators.required]),
     weektime3:new FormControl("",[Validators.required]),
     weektime4:new FormControl("",[Validators.required]),
     weektime5:new FormControl("",[Validators.required]),
     weektime6:new FormControl("",[Validators.required]),
     weektime7:new FormControl("",[Validators.required]),
     weektime8:new FormControl("",[Validators.required]),
     weektime9:new FormControl("",[Validators.required]),
     weektime10:new FormControl("",[Validators.required]),
     weektime11:new FormControl("",[Validators.required]),
     weektime12:new FormControl("",[Validators.required]),
     weektime13:new FormControl("",[Validators.required]),
     weektime14:new FormControl("",[Validators.required]),
     hygieneprecautions:new FormControl("",[Validators.required]),
     aminitesonyourbranch:new FormControl("",[Validators.required]),
     comments:new FormControl(""),
    })
  }

  onclicksaveFN(){
    let payload:saveBranchAddIncomingModel={
      branchname: this.branchesaddformgroup.value.branchname,
      branchstate:this.branchesaddformgroup.value.branchstate,
      branchcity:this.branchesaddformgroup.value.city,
      branchdistrict: this.branchesaddformgroup.value.district,
      branchlocation: this.branchesaddformgroup.value.branchlocation,
      branchcountry: this.branchesaddformgroup.value.country,
      branchstreet: this.branchesaddformgroup.value.branchstreet,
      branchlocality: this.branchesaddformgroup.value.loclity,
      latitude: 0,
      longitude: 0,
      branchprimaryphonenumber: this.branchesaddformgroup.value.primarymobileno,
      branchsecondaryphonenumber: this.branchesaddformgroup.value.secondarymobileno,
      branchprimaryemailaddress: this.branchesaddformgroup.value.primaryemailaddress,
      branchsecondaryemailaddress: this.branchesaddformgroup.value.secondaryemailaddress,

      branchweekdayidformonday: this.branchesaddformgroup.value.monday,
      branchmondayworkingstatus: this.branchesaddformgroup.value.branchcity,
      branchmondayopentime: this.branchesaddformgroup.value.branchcity,
      branchmondayopentimevalue: 0,
      branchmondayclosedtime: this.branchesaddformgroup.value.branchcity,
      branchmondayclosedtimevalue: 0,


      branchweekdayidfortuesday: this.branchesaddformgroup.value.branchcity,
      branchtuesdayworkingstatus: this.branchesaddformgroup.value.branchcity,
      branchtuesdayopentime: this.branchesaddformgroup.value.branchcity,
      branchtuesdayopentimevalue: 0,
      branchtuesdayclosedtime: this.branchesaddformgroup.value.branchcity,
      branchtuesdayclosedtimevalue: 0,
      
      branchweekdayidforwednesday: this.branchesaddformgroup.value.branchcity,
      branchwednesdayworkingstatus: this.branchesaddformgroup.value.branchcity,
      branchwednesdayopentime: this.branchesaddformgroup.value.branchcity,
      branchwednesdayopentimevalue: 0,
      branchwednesdayclosedtime: this.branchesaddformgroup.value.branchcity,
      branchwednesdayclosedtimevalue: 0,


      branchweekdayidforthursday: this.branchesaddformgroup.value.branchcity,
      branchthursdayworkingstatus: this.branchesaddformgroup.value.branchcity,
      branchthursdayopentimevalue: 0,
      branchthursdayopentime: this.branchesaddformgroup.value.branchcity,
      branchthursdayclosedtime: this.branchesaddformgroup.value.branchcity,
      branchthursdayclosedtimevalue: 0,


      branchweekdayidforfriday: this.branchesaddformgroup.value.branchcity,
      branchfridayworkingstatus: this.branchesaddformgroup.value.branchcity,
      branchfridayopentimevalue: 0,
      branchfridayopentime: this.branchesaddformgroup.value.branchcity,
      branchfridayclosedtime: this.branchesaddformgroup.value.branchcity,
      branchfridayclosedtimevalue: 0,


      branchweekdayidforsaturday: this.branchesaddformgroup.value.branchcity,
      branchsaturdayworkingstatus: this.branchesaddformgroup.value.branchcity,
      branchsaturdayopentimevalue: 0,
      branchsaturdayopentime: this.branchesaddformgroup.value.branchcity,
      branchsaturdayclosedtime: this.branchesaddformgroup.value.branchcity,
      branchsaturdayclosedtimevalue: 0,


      branchweekdayidforsunday: this.branchesaddformgroup.value.branchcity,
      branchsundayworkingstatus: this.branchesaddformgroup.value.branchcity,
      branchsundayopentime: this.branchesaddformgroup.value.branchcity,
      branchsundayopentimevalue: 0,
      branchsundayclosedtime: this.branchesaddformgroup.value.branchcity,
      branchsundayclosedtimevalue: 0,


      comments: this.branchesaddformgroup.value.comments,
      amenitienameswithcommasaperated: this.branchesaddformgroup.value.aminitesonyourbranch,
      amenitieidswithcommasaperated: this.branchesaddformgroup.value.branchcity,
      hygienenameswithcommasaperated: this.branchesaddformgroup.value.hygieneprecautions,
      hygieneidswithcommasaperated: this.branchesaddformgroup.value.branchcity,
      zip: this.branchesaddformgroup.value.zip,
      enableonlinebooking: 0,
      enablehygiene: 0,
      gstnumber: this.branchesaddformgroup.value.gstnumber,
      branchlogo: this.branchesaddformgroup.value.branchlogo,
    }
    console.log(payload)
  }



onclickclose(){
  this.dialogRef.close()
}

}