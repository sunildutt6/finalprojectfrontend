import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user= new User();

  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem('userdetails')){
        this.user= JSON.parse(sessionStorage.getItem('userdetails')!);
      }
      if(!this.user){
        this.router.navigate(['login']);
      }
    return this.user ? true : false;
  }
  
}
