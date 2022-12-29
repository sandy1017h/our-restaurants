import { Injectable } from '@angular/core';


export interface saveEmployeeeditIncomingModel{

  branchidswithcommasepareted: string
  branchnameswithcommasepareted: string
  buildingname: string
  comments: string
  doororflatnumber: string
  employeecity: string
  employeedesignation: string
  employeedetailsiduniquekey: number
  employeedob: number
  employeefirstname: string
  employeelastname: string
  employeelocality: string
  employeemarriagedate: number
  employeename: string
  employeepassword: string
  employeepermissiontypeid: number
  employeeprimaryemailaddress: string
  employeeprimaryphonenumber: string
  employeesecondaryemailaddress: string
  employeesecondaryphonenumber: string
  employeestate: string
  employeesupervisor: string
  organizationidpartitionkey: number
  organizationname: string
  street: string
  zip: string


}

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeSaveService {

  constructor() { }




}
