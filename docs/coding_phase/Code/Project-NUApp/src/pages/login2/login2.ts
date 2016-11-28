import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GatepassService } from '../../providers/gatepass-service';
import { Student } from '../../classes/student';
import { UserService } from '../../providers/user-service';
import { Timetable } from '../timetable/timetable';
/*
  Generated class for the Login2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html'
})
export class Login2 {

  public email_id: string;
  public password: string;
  public msg: string;

  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    private gatepassService: GatepassService,
    private userService: UserService
    ) {

   // this.email_id = navParams.get('email_id');
  }

  ionViewDidLoad() {
      console.log('Hello Login2 Page');

  }
/*
  signInUser() {
    if (this.password == '')
      return;
    this.gatepassService.loginUser(this.email_id, this.password)
      .subscribe(
        data => this.nextStep(data),
        error => this.msg = <any>error
      );
  }

  nextStep(data) {
    // Store the API key and student info in local storage.
    let student = new Student(data['name'], data['user_id'], data['email_id'], data['api_key']);

    this.userService.storeUser(student);

    this.navCtrl.setRoot(Timetable);
  }
*/
}
