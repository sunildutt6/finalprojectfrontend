import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS  } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account/account.component';
import { BalanceComponent } from './components/balance/balance/balance.component';
import { CardsComponent } from './components/cards/cards/cards.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header/header.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoansComponent } from './components/loans/loans/loans.component';
import { LoginComponent } from './components/login/login/login.component';
import { LogoutComponent } from './components/logout/logout/logout.component';
import { NoticesComponent } from './components/notices/notices/notices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { AuthGuard } from './routeguards/auth.guard';
import { RegisterComponent } from './components/register/register/register.component';
import { MaterialModule } from 'src/material.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    BalanceComponent,
    CardsComponent,
    ContactComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    LoansComponent,
    LoginComponent,
    LogoutComponent,
    NoticesComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HttpClientXsrfModule.withOptions({
      cookieName:'XSRF-TOKEN',
      headerName:'X-XSRF-TOKEN'
    }),
  ],
  providers: [{
    provide:  HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi:true
  },AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
