import { Component, Inject, VERSION } from '@angular/core';
import { AlertService } from './user-module/service/alert.service';
import { CommonService } from './user-module/service/common.service';
import { EvenBetterLoggerService } from './user-module/service/even-better-logger.service';
import { LoggerService } from './user-module/service/logger.service';
import { UserService } from './user-module/service/user.service';
import { USER_CONFIG } from './user-module/user.config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular providers';
  user: any;
  constructor(
    private loggerService: LoggerService,
    private userService: UserService,
    private commonService: CommonService,
    private evenBetterLoggerService: EvenBetterLoggerService,
    private alertService: AlertService,
    @Inject(USER_CONFIG) config: any
  ) {
    this.user = config;
  }

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
