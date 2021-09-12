import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './component/user/user.component';
import { CommonService } from './service/common.service';
import { EvenBetterLoggerService } from './service/even-better-logger.service';
import { LoggerService } from './service/logger.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule {}
