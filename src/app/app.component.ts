import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserControllerService } from 'typescript-angular-client';
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
  constructor(private UserControllerService: UserControllerService, alertConfig: NgbAlertConfig) {
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }



  


}
