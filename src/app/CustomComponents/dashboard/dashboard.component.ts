import { Component, OnInit } from '@angular/core';
import { UserControllerService } from 'typescript-angular-client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userList;

  constructor(private UserControllerService: UserControllerService) { }

  ngOnInit(): void {
    this.findUser();
  }


  findUser(){
    this.UserControllerService.loginUsingPOST(localStorage.getItem("username"),localStorage.getItem("username")).subscribe(obj => {
      this.userList = obj;
    });
  }

}
