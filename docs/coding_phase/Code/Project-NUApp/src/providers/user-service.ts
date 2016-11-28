import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NativeStorage } from 'ionic-native'
import 'rxjs/add/operator/map';
import { Student } from '../classes/student';


/*
  Generated class for the User provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {

  student: Student;

  constructor(public http: Http) {
    console.log('Hello User Provider');
  }

  isLoggedIn() {
    return NativeStorage.getItem('student')
      .then(
      data => true,
      error => false
      );
  }

  getUser() {
    return NativeStorage.getItem('student')
      .then(
        data => JSON.parse(data) as Student,
        error => console.error(error)
      );
  }

  storeUser(s: Student) {
    NativeStorage.setItem('student', JSON.stringify(s))
      .then(
        () => console.log('Student stored'),
        error => console.error('Error storing item', error)
      );
  }
}
