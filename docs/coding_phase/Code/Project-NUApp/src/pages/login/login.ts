import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GatepassService } from '../../providers/gatepass-service';
import { Login2 } from '../login2/login2';
import { Timetable } from '../timetable/timetable';
import { UserService } from '../../providers/user-service';
import { Student } from '../../classes/student';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  public email_id: string;
  public password: string;
  public msg: string;

  constructor(public navCtrl: NavController, private gatepassService: GatepassService, private userService: UserService ) {
    this.email_id = '';
  }

  ionViewDidLoad() {
    console.log('Hello Login Page');

  }
  // public validateUser() {
  //   if (this.email_id == '')
  //     return;
  //   this.gatepassService.checkUser(this.email_id)
  //     .subscribe(
  //       data => this.nextStep(data),
  //       error => this.msg = <any>error
  //     );
  // }

  // private nextStep(data: any) {
  //   console.log('Got it now!!!');

  //   // TODO error checking weather the email_id is correct or not
  //   this.msg = data['message'];

  //   this.navCtrl.push(Login2, {
  //       email_id: this.email_id
  //   });
  // }

gotoNextPage() {

  let s = new Student('NVS Abhilash', 'U101114FCS223', 'nvs.abhilash@st.niituniversity.in');
  this.userService.storeUser(s);
  this.navCtrl.setRoot(Timetable, {
         email_id: this.email_id
     });
}

}
