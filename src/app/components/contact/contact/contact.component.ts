import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/model/contact.model';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model = new Contact();

  constructor(private dash: DashboardService){}
  
  ngOnInit(): void { }

  saveMessage(contactForm: NgForm){
    this.dash.saveMessage(this.model).subscribe(res => {
      this.model = <any> res.body;
      contactForm.resetForm();
    })
  }


}
