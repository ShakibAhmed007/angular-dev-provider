import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './component/user/user.component';
import { CommonService } from './service/common.service';
import { EvenBetterLoggerService } from './service/even-better-logger.service';
import { LoggerService } from './service/logger.service';
import { AlertService } from './service/alert.service';
import { EvenBetterAlertService } from './service/even-better-alert.service';
import { USER_CONFIG } from './user.config';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [
    EvenBetterAlertService,
    { provide: EvenBetterLoggerService, useClass: EvenBetterLoggerService },
    { provide: AlertService, useExisting: EvenBetterAlertService },
    { provide: USER_CONFIG, useValue: USER_CONFIG }
  ]
})
export class UserModule {}
