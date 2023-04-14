import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  
  notices = new Array();

  constructor(private dash: DashboardService){ }

  ngOnInit(): void {
    this.dash.getNoticeDetails().subscribe(res => {
      this.notices =<any> res.body;
    })
  }

}
