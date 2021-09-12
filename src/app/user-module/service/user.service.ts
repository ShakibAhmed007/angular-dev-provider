import { Injectable } from '@angular/core';
import { UserModule } from '../user.module';

@Injectable({
  providedIn: UserModule // provider scope
})
export class UserService {
  constructor() {}

  printUser() {
    console.log('User Service is waorking !!! ');
    alert('User Service is working !!! ');
  }
}
