import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  constructor() { }

  alert(){
    alert('Alert Service Is working');
  }

}