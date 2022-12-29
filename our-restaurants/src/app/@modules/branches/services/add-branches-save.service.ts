import { Injectable } from '@angular/core';
export interface saveBranchAddIncomingModel{

  branchname: string;
  branchstate: string;
  branchcity: string;
  branchdistrict: string;
  branchlocation: string;
  branchcountry: string;
  branchstreet: string;
  branchlocality: string;
  latitude: number;
  longitude: number;
  branchprimaryphonenumber: string;
  branchsecondaryphonenumber: string;
  branchprimaryemailaddress: string;
  branchsecondaryemailaddress: string;
  branchweekdayidformonday:string ;
  branchmondayworkingstatus: string;
  branchmondayopentime: string;
  branchmondayopentimevalue: number;
  branchmondayclosedtime: string;
  branchmondayclosedtimevalue: number;
  branchweekdayidfortuesday:string;
  branchtuesdayworkingstatus: string;
  branchtuesdayopentime: string;
  branchtuesdayopentimevalue: number;
  branchtuesdayclosedtime: string;
  branchtuesdayclosedtimevalue: number;
  branchweekdayidforwednesday:string;
  branchwednesdayworkingstatus: string;
  branchwednesdayopentime: string;
  branchwednesdayopentimevalue: number;
  branchwednesdayclosedtime: string;
  branchwednesdayclosedtimevalue: number;
  branchweekdayidforthursday:string;
  branchthursdayworkingstatus: string;
  branchthursdayopentimevalue: number;
  branchthursdayopentime: string;
  branchthursdayclosedtime: string;
  branchthursdayclosedtimevalue: number;
  branchweekdayidforfriday:string;
  branchfridayworkingstatus: string;
  branchfridayopentimevalue: number;
  branchfridayopentime: string;
  branchfridayclosedtime: string;
  branchfridayclosedtimevalue: number;
  branchweekdayidforsaturday:string;
  branchsaturdayworkingstatus: string;
  branchsaturdayopentimevalue: number;
  branchsaturdayopentime: string;
  branchsaturdayclosedtime: string;
  branchsaturdayclosedtimevalue: number;
  branchweekdayidforsunday:string;
  branchsundayworkingstatus: string;
  branchsundayopentime: string;
  branchsundayopentimevalue: number;
  branchsundayclosedtime: string;
  branchsundayclosedtimevalue: number;
  comments: string;
  amenitienameswithcommasaperated: string;
  amenitieidswithcommasaperated: string;
  hygienenameswithcommasaperated: string;
  hygieneidswithcommasaperated: string;
  zip: string;
  enableonlinebooking: number;
  enablehygiene: number;
  gstnumber:string;
branchlogo:string
}

@Injectable({
  providedIn: 'root'
})
export class AddBranchesSaveService {

  constructor() { }
}
