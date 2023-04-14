import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/model/account.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user= new User();
  account = new Account();
  constructor(private dash: DashboardService){}


  ngOnInit(): void {
   this.user= JSON.parse(sessionStorage.getItem('userdetails')!);

   if(this.user){
      this.dash.getAccountDetails(this.user.id).subscribe(res => {
        this.account =<any> res.body;
      })
   }

  }



}
