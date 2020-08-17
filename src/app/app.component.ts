import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MainControllerService } from 'typescript-angular-client';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sampleswaggerproject';
  name = new FormControl('arnab');
  userList;
  constructor(private MainControllerService: MainControllerService, alertConfig: NgbAlertConfig) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }


  findAllUsers(){
    this.MainControllerService.getAllUsersUsingGET().subscribe(obj => {
      
      this.userList = obj;
      
    });

  }

  findUser(){
    this.MainControllerService.findUserByNameUsingPOST(this.name.value).subscribe(obj => {
      this.userList = obj;
  });
  }


}
