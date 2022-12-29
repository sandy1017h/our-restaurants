import { Injectable } from '@angular/core';

export interface saveEmployeeaddIncomingModel{
  employeelastname: string;
  employeefirstname:string;
  employeedob: number;
  employeemarriagedate: number;
  branchnameswithcommasepareted:string;
  branchidswithcommasepareted: number;
  employeeprimaryphonenumber: number;
  employeesecondaryphonenumber: number;
  employeeprimaryemailaddress: string;
  employeesecondaryemailaddress: string;
  employeelocality: string;
  employeestate: string;
  employeecity: string;
  zip: number;
  doororflatnumber: string;
  buildingname: string;
  street: string;
  employeedesignation: string;
  employeesupervisor:string;
  comments:string;
  employeepassword: string;
  employeepermissiontypeid: number;
  
  
}



@Injectable({
  providedIn: 'root'
})
export class SaveemployeesService {

  constructor() { }
}
