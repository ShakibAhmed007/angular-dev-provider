import { Injectable } from '@angular/core';
import { UserModule } from '../user-module.module';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() {}

  log() {
    console.log('Logger Service is waorking !!! ');
    alert('Logger Service is working !!! ');
  }
}
