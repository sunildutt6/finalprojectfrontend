import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { LoginService } from 'src/app/services/login/login.service';
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User();
  authStatus:string= "";

  constructor(private loginService:LoginService, private router:Router){}

  ngOnInit(): void { }

  validateUser(loginForm: NgForm){
    console.log(this.model.password)
    this.loginService.validateLoginDetails(this.model).subscribe(res => {
      this.model=<any> res.body;
      this.authStatus="AUTH";
      window.sessionStorage.setItem("userdetails", JSON.stringify(this.model));

      let xsrf = getCookie("XSRF-TOKEN");
      window.sessionStorage.setItem("XSRF-TOKEN", xsrf);
      this.router.navigate(['dashboard'])
    })
    
  }

}
