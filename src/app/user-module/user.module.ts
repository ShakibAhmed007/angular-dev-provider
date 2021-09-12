import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './component/user/user.component';
import { CommonService } from './service/common.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule {}
