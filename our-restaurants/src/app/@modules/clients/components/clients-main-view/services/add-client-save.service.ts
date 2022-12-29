import { Injectable } from '@angular/core';
 
export interface saveClientAddIncomingModel{
  clientlastname: string;
  clientfirstname: string;
  clientdob: number;
  clientmarriagedate: number;
  clientlocality: string;
  clientcity: string;
  clientdistrict: string;
  clientstate: string;
  clientcountry: string;
  zip: string;
  clientprimaryphonenumber: string;
  clientsecondaryphonenumber: string;
  clientprimaryemailaddress: string;
  clientsecondaryemailaddress: string;
  comments: string;

 }


@Injectable({
  providedIn: 'root'
})
export class AddClientSaveService {

  constructor() { }
}
