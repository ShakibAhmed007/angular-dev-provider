import { Injectable } from '@angular/core';

@Injectable()
export class EvenBetterAlertService {
  constructor() {}

  alert() {
    alert('Better Alert Service Is working');
  }
}
