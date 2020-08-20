import { Component, OnInit } from '@angular/core';
import { UserControllerService } from 'typescript-angular-client';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList;

  constructor(private UserControllerService: UserControllerService) { }

  ngOnInit(): void {
    this.findAllUsers();
  }

  findAllUsers(){
    this.UserControllerService.getAllUsersUsingGET().subscribe(obj => {
      this.userList = obj;
    });

  }

}
