import { Component, OnInit } from '@angular/core';
import { AccountTransactions } from 'src/app/model/account.transactions.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  user= new User();
  transactions=  new Array();

  constructor(private dash:DashboardService){}

  ngOnInit(): void {
    this.user= JSON.parse(sessionStorage.getItem('userdetails') || "");
    if(this.user){
      this.dash.getAccountTransactions(this.user.id).subscribe(res =>{
        this.transactions= <any> res.body;
        
      })
    }
  }

}
