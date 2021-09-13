import { Component, VERSION } from '@angular/core';
import { AlertService } from './user-module/service/alert.service';
import { CommonService } from './user-module/service/common.service';
import { EvenBetterLoggerService } from './user-module/service/even-better-logger.service';
import { LoggerService } from './user-module/service/logger.service';
import { UserService } from './user-module/service/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular providers';
  constructor(
    private loggerService: LoggerService,
    private userService: UserService,
    private commonService: CommonService,
    private evenBetterLoggerService: EvenBetterLoggerService,
    private alertService: AlertService
  ) {}

  showLoggerServiceLog() {
    this.loggerService.log();
  }

  showEvenBetterLoggerServiceLog() {
    this.evenBetterLoggerService.log();
  }

  showUserServiceLog() {
    this.userService.printUser();
  }

  showCommonServiceLog() {
    this.commonService.printData();
  }

  showEventBetterAlert() {
    this.alertService.alert();
  }
}
