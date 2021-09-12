import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // provider scope
})
export class LoggerService {
  constructor() {}

  log() {
    console.log('Logger Service is waorking !!! ');
    alert('Logger Service is working !!! ');
  }
}
