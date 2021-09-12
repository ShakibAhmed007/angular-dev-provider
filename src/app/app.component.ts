import { Component, VERSION } from '@angular/core';
import { CommonService } from './user-module/service/common.service';
import { LoggerService } from './user-module/service/logger.service';
import { UserService } from './user-module/service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(
    private loggerService: LoggerService,
    private userService: UserService,
    private commonService: CommonService
  ) {}

  showLoggerServiceLog() {
    this.loggerService.log();
  }

  showUserServiceLog() {
    this.userService.printUser();
  }

  showCommonServiceLog() {
    this.commonService.printData();
  }
}
