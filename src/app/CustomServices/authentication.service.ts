import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'typescript-angular-client';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginUserSubject = new BehaviorSubject<User>(null);

  loginUser = this.loginUserSubject.asObservable();

  updateUserData(loginUser) {
      this.loginUserSubject.next(loginUser);
  }

  constructor() { }
}
