import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor( private router:Router,
    private authService:AuthenticationService
    ) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.authService.isUserLoggedIn())
    return true;
    this.router.navigate(['login']);
    return false;
  }
}
