import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account/account.component';
import { BalanceComponent } from './components/balance/balance/balance.component';
import { CardsComponent } from './components/cards/cards/cards.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoansComponent } from './components/loans/loans/loans.component';
import { LoginComponent } from './components/login/login/login.component';
import { LogoutComponent } from './components/logout/logout/logout.component';
import { NoticesComponent } from './components/notices/notices/notices.component';
import { AuthGuard } from './routeguards/auth.guard';
import { RegisterComponent } from './components/register/register/register.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'notices', component:NoticesComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'logout', component:LogoutComponent},
  {path:'myAccount', component:AccountComponent , canActivate:[AuthGuard]},
  {path:'myBalance', component:BalanceComponent, canActivate:[AuthGuard]},
  {path:'myLoans', component:LoansComponent, canActivate:[AuthGuard]},
  {path:'myCards', component:CardsComponent, canActivate:[AuthGuard]},
  {path:'**', redirectTo:'/home', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
