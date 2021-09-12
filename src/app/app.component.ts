import { Component, VERSION } from '@angular/core';
import { LoggerService } from './user-module/service/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private loggerService: LoggerService) {}

  showLog() {
    this.loggerService.log();
  }
}
