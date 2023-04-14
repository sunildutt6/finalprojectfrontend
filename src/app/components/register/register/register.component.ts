import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  registrationForm: FormGroup = this.fb.group({
      name: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      password: this.fb.control('', Validators.compose([Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)])),
      mobile: this.fb.control('',Validators.compose([Validators.required,Validators.pattern(/^[0-9]{8}/)])),
      role: this.fb.control('', Validators.compose([Validators.required])),
    });;

  constructor(
    private fb: FormBuilder,
    private dash: DashboardService,
    private router: Router,
    private toastr: ToastrService
  ) {}

   ngOnInit(): void {
    this.toastr.toastrConfig.positionClass = 'toast-top-center';
   }

  onSubmit() {
    console.log(this.registrationForm.value)
    if (this.registrationForm.valid) {
      this.dash.registerUser(this.registrationForm.value)
        .subscribe((data) => {
          this.toastr.success('User registered successfully');
          this.router.navigate(['login']);
        });
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }
}