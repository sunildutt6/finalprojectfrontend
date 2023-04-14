import { Component, OnInit } from '@angular/core';
import { Loans } from 'src/app/model/loans.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  user= new User();
  loans = new Array();
  currOutstandingBalance:number = 0;

  constructor(private dash: DashboardService){}

  ngOnInit(): void {
    this.user= JSON.parse(sessionStorage.getItem('userdetails') || "");
    if(this.user){
      this.dash.getLoansDetails(this.user.id).subscribe(res => {
        this.loans = <any> res.body;
        this.loans.forEach(function(this: LoansComponent, loans:Loans){
          this.currOutstandingBalance=  this.currOutstandingBalance+loans.outstandingAmount;
        }.bind(this));
      })
    }
  }

}
