import { Injectable } from '@angular/core';

export interface updateClientDetailsIncomingModel{
  organizationclientdetailsiduniquekey: number;
  clientlastname:string;
  clientfirstname:string;
  clientdob:number;
  clientmarriagedate:number;
  buildingname:string;
  clientcity:string;
  clientlocality:string;
  clientprimaryemailaddress: string;
  clientprimaryphonenumber:number;
  clientsecondaryemailaddress:string;
  clientsecondaryphonenumber:number;
  comments:string;
  doororflatnumber:number;
  street: string;
  zip:number;
  clientstate: string;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor() { }
}
