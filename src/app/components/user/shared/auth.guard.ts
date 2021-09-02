import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserService } from '../auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(public router: Router, public authUserService: AuthUserService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | UrlTree | Promise<boolean> | UrlTree | boolean | UrlTree {

    if(this.authUserService.isLoggedIn !== true) {
      this.router.navigate(['login'])
      console.log(this.authUserService.isLoggedIn)
    }
    return true
    
    
  }
  
}
