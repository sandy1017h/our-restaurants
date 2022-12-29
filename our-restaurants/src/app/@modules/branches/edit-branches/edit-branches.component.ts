import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmlpoyeeMainViewComponent } from '../../employees/components/emlpoyee-main-view/emlpoyee-main-view.component';
import { UpdatebranchDetailsIncomingModel } from '../services/update.service';

@Component({
  selector: 'app-edit-branches',
  templateUrl: './edit-branches.component.html',
  styleUrls: ['./edit-branches.component.scss']
})
export class EditBranchesComponent implements OnInit {
  brancheseditformgroup!:FormGroup
  constructor(public dialogref:MatDialogRef<EmlpoyeeMainViewComponent>) { }
  ngOnInit(): void {
    this.brancheseditformgroup=new FormGroup({
      branchname:new FormControl("",[Validators.required]),
      gstnumber:new FormControl("",[Validators.required]),
      primarymobileno:new FormControl("",[Validators.required]),
      secondarymobileno:new FormControl("",[Validators.required]),
      primaryemailaddress:new FormControl("",[Validators.email]),
      secondaryemailaddress:new FormControl("",[Validators.email]),
      pinyourlocation:new FormControl("",[Validators.required]),
      locality:new FormControl("",[Validators.required]),
      city:new FormControl("",[Validators.required]),
      state:new FormControl("",[Validators.required]),
      street:new FormControl("",[Validators.required]),
      district:new FormControl("",[Validators.required]),
      country:new FormControl("",[Validators.required]),
      zip:new FormControl("",[Validators.required]),
      weektime1:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime2:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime3:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime4:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime5:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime6:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime7:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime8:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime9:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime10:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime11:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime12:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime13:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      weektime14:new FormControl("",[Validators.required,Validators.maxLength(5)]),
      selecthygine:new FormControl("",[Validators.required]),
      aminitesonyourbranch:new FormControl("",[Validators.required]),
      comments:new FormControl("",[Validators.required]),
    })
  }

  onclickupdateFN(){
let payload:UpdatebranchDetailsIncomingModel={

  branchdetailsiduniquekey:this.brancheseditformgroup.value.branchdetailsiduniquekey,
  branchname:this.brancheseditformgroup.value.branchname,
  branchstate: this.brancheseditformgroup.value.state,
  branchcity: this.brancheseditformgroup.value.city,
  branchdistrict: this.brancheseditformgroup.value.district,
  branchlocation: this.brancheseditformgroup.value.branchlocation,
  branchcountry: this.brancheseditformgroup.value.country,
  branchstreet: this.brancheseditformgroup.value.street,
  branchlocality: this.brancheseditformgroup.value.locality,
  latitude: 0,
  longitude: 0,
  branchprimaryphonenumber: this.brancheseditformgroup.value.primarymobileno,
  branchsecondaryphonenumber: this.brancheseditformgroup.value.secondarymobileno,
  branchprimaryemailaddress: this.brancheseditformgroup.value.primaryemailaddress,
  branchsecondaryemailaddress: this.brancheseditformgroup.value.secondaryemailaddress,


  branchweekdayidformonday: this.brancheseditformgroup.value.branchweekdayidformonday,
  branchmondayworkingstatus: this.brancheseditformgroup.value.branchmondayworkingstatus,
  branchmondayopentime: this.brancheseditformgroup.value.branchmondayopentime,
  branchmondayopentimevalue: 0,
  branchmondayclosedtime: this.brancheseditformgroup.value.mondayclosedtime,
  branchmondayclosedtimevalue: 0,


  branchweekdayidfortuesday: this.brancheseditformgroup.value.branchweekdayidfortuesday,
  branchtuesdayworkingstatus: this.brancheseditformgroup.value.branchtuesdayworkingstatus,
  branchtuesdayopentime: this.brancheseditformgroup.value.branchtuesdayopentime,
  branchtuesdayopentimevalue: 0,
  branchtuesdayclosedtime: this.brancheseditformgroup.value.branchtuesdayclosedtime,
  branchtuesdayclosedtimevalue: 0,


  branchweekdayidforwednesday:this.brancheseditformgroup.value.monday,
  branchwednesdayworkingstatus: this.brancheseditformgroup.value.monday,
  branchwednesdayopentime: this.brancheseditformgroup.value.monday,
  branchwednesdayopentimevalue: 0,
  branchwednesdayclosedtime: this.brancheseditformgroup.value.monday,
  branchwednesdayclosedtimevalue:0,


  branchweekdayidforthursday: this.brancheseditformgroup.value.monday,
  branchthursdayworkingstatus: this.brancheseditformgroup.value.monday,
  branchthursdayopentimevalue: 0,
  branchthursdayopentime: this.brancheseditformgroup.value.monday,
  branchthursdayclosedtime: this.brancheseditformgroup.value.monday,
  branchthursdayclosedtimevalue: 0,


  branchweekdayidforfriday: this.brancheseditformgroup.value.monday,
  branchfridayworkingstatus: this.brancheseditformgroup.value.monday,
  branchfridayopentimevalue: 0,
  branchfridayopentime: this.brancheseditformgroup.value.monday,
  branchfridayclosedtime: this.brancheseditformgroup.value.monday,
  branchfridayclosedtimevalue: 0,


  branchweekdayidforsaturday: this.brancheseditformgroup.value.monday,
  branchsaturdayworkingstatus: this.brancheseditformgroup.value.monday,
  branchsaturdayopentimevalue: 0,
  branchsaturdayopentime: this.brancheseditformgroup.value.monday,
  branchsaturdayclosedtime: this.brancheseditformgroup.value.monday,
  branchsaturdayclosedtimevalue: 0,


  branchweekdayidforsunday: this.brancheseditformgroup.value.monday,
  branchsundayworkingstatus: this.brancheseditformgroup.value.monday,
  branchsundayopentime: this.brancheseditformgroup.value.monday,
  branchsundayopentimevalue: 0,
  branchsundayclosedtime: this.brancheseditformgroup.value.monday,
  branchsundayclosedtimevalue: 0,


  comments: this.brancheseditformgroup.value.comments,
  amenitienameswithcommasaperated: this.brancheseditformgroup.value.aminitesonyourbranch,
  amenitieidswithcommasaperated: this.brancheseditformgroup.value.aminitesonyourbranch,
  hygienenameswithcommasaperated: this.brancheseditformgroup.value.monday,
  hygieneidswithcommasaperated: this.brancheseditformgroup.value.monday,
  zip: this.brancheseditformgroup.value.zip,
  enableonlinebooking: this.brancheseditformgroup.value.enableonlinebooking,
  enablehygiene: this.brancheseditformgroup.value.selecthygine,
  gstnumber: this.brancheseditformgroup.value.gstnumber,
  branchlogo: this.brancheseditformgroup.value.branchlogo,
}

console.log(payload)

  }
  onclickclose(){
this.dialogref.close()
  }
 onclicksave(){
  console.log(this.brancheseditformgroup.value)
 }
}
