import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Injectable()
export class CommonService {
  constructor(
    private loggerService: LoggerService,
    private userService: UserService
  ) {}

  printData() {
    alert('Common service uses UserService, LoggerService');
    this.loggerService.log();
    this.userService.printUser();
  }
}
