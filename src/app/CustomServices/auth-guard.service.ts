import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{


  updateUserData(loginUser) {
      localStorage.setItem("authentication",loginUser.authenticationToken);
  }
  
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem("authentication")==null ){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  
  

  
}
