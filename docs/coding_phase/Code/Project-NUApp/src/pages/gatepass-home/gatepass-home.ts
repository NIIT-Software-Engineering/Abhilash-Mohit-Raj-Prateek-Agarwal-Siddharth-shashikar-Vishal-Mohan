import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GatepassStep1 } from '../gatepass-step1/gatepass-step1';
import { Gatepass } from '../../classes/gatepass';
import { Login } from '../login/login';
import { UserService } from '../../providers/user-service';
import { GatepassService } from '../../providers/gatepass-service';

/*
  Generated class for the GatepassHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gatepass-home',
  templateUrl: 'gatepass-home.html'
})
export class GatepassHome {


  public student: any;
  public gatepass: any;

  constructor(public navCtrl: NavController,
    private userService: UserService,
    public gatepassService: GatepassService) {

  }

  ionViewDidLoad() {
    console.log('Hello GatepassHome Page');

    // TODO
    // Check for internet connection, without that this module won't work.

    this.userService.getUser().then(s => {
        if (s != null) {
          this.student = s;
          console.log('This is the class', JSON.stringify(this.student));

          this.gatepassService.checkStatus(this.student.enrollment_no)
          .subscribe(
            data => {
              this.gatepass = data;
              console.log("Gatepass Object: ", JSON.stringify(this.gatepass));
            }
            // error => this.msg = <any>error
          );

        }
        else {
          // Navigate back to login page.

          this.navCtrl.setRoot(Login);
        }
      },
      error => console.log('Error reading data'));
  }

  applyGatepass() {
    // Navigate to fill the form.

    this.navCtrl.push(GatepassStep1, {
      student: this.student
    });
  }

}
