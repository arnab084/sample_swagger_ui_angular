import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserControllerService } from 'typescript-angular-client';
import { Router } from '@angular/router';

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

  constructor(private UserControllerService: UserControllerService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.schoolLoginForm.value);
    this.UserControllerService.loginUsingPOST(this.schoolLoginForm.value.password,this.schoolLoginForm.value.username).subscribe(obj => {
      console.log(obj);
      if(obj){
        localStorage.setItem("authentication",obj.authenticationToken);
        this.router.navigate(['userlist'])
      }
      
    });
  }

}
