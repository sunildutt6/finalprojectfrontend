import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';
import { Contact } from 'src/app/model/contact.model';
import { User } from 'src/app/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) {}

  
  getAccountDetails(id: number){
      return this.http.get(environment.rooturl + AppConstants.ACCOUNT_API + "?id="+id, {observe:'response', withCredentials:true})
    }

  getAccountTransactions(id:number){
    return this.http.get(environment.rooturl + AppConstants.BALANCE_API + "?id="+id, {observe:'response', withCredentials:true})
  }

  getLoansDetails(id:number){
    return this.http.get(environment.rooturl + AppConstants.LOANS_API + "?id="+id, {observe:'response', withCredentials:true})
  }

  getCardsDetails(id:number){
    return this.http.get(environment.rooturl + AppConstants.CARDS_API + "?id="+id, {observe:'response', withCredentials:true})
  }

  getNoticeDetails(){
    return this.http.get(environment.rooturl + AppConstants.NOTICES_API , {observe:'response'})
  }

  saveMessage(contact:Contact){
    return this.http.post(environment.rooturl + AppConstants.CONTACT_API, contact, {observe:'response'})
  }

  registerUser(user: User){
    return this.http.post(environment.rooturl + AppConstants.REGISTER_API, user, {observe:'response'});
  }
  
}
