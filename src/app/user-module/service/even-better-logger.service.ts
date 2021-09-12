import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class EvenBetterLoggerService {
  constructor() {}

  log() {
    console.log('EvenBetterLoggerService is waorking !!! ');
    alert('EvenBetterLoggerService is working !!! ');
  }
}
