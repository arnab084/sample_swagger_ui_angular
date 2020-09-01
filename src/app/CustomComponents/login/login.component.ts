import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from 'typescript-angular-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  schoolLoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private UserControllerService: UserControllerService, 
    private Router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.UserControllerService.loginUsingPOST(this.schoolLoginForm.value).subscribe(obj => {
        console.log(obj);
        localStorage.setItem("authentication",obj.authenticationToken);
        localStorage.setItem("username",obj.username);
        this.Router.navigate(['userlist']);
    },error => {
      localStorage.clear();
      this.schoolLoginForm.setErrors(error.error.message);
    });
  }


  get username() { return this.schoolLoginForm.controls['username']; }
  get password() { return this.schoolLoginForm.controls['password']; }

}
