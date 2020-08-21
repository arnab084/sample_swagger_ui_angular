import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserControllerService } from 'typescript-angular-client';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/CustomServices/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  schoolLoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private UserControllerService: UserControllerService, 
    private Router:Router,
    private AuthenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.UserControllerService.loginUsingPOST(this.schoolLoginForm.value.password,this.schoolLoginForm.value.username).subscribe(obj => {
      this.AuthenticationService.updateUserData(obj);
      
      if(obj){
        localStorage.setItem("authentication",obj.authenticationToken);
        this.Router.navigate(['userlist']);
      } else{
        localStorage.setItem("authentication",null);
      }
      
    });
  }

}
