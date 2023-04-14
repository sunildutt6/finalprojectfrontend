import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/model/cards.model';
import { User } from 'src/app/model/user.model';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  user = new User();
  cards = new Array();
  currOutstandingsAmt:number = 0;
   
  constructor(private dash: DashboardService){}
  
  ngOnInit(): void {
    this.user= JSON.parse(sessionStorage.getItem('userdetails') || "");
    if(this.user){
      this.dash.getCardsDetails(this.user.id).subscribe(res => {
        this.cards = <any> res.body;
        this.cards.forEach(function(this: CardsComponent, card: Cards){
          this.currOutstandingsAmt = this.currOutstandingsAmt + card.availableAmount;
        }.bind(this));
      })
    }
  }


}
