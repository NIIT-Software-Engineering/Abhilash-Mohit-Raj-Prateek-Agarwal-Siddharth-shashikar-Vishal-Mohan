import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Gatepass } from '../../classes/gatepass';
import { Student } from '../../classes/student';
import { GatepassPreApply } from '../../classes/gatepass-pre-apply';
import { GatepassService } from '../../providers/gatepass-service';
import { GatepassHome } from '../gatepass-home/gatepass-home';

/*
  Generated class for the GatepassFinal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gatepass-final',
  templateUrl: 'gatepass-final.html'
})
export class GatepassFinal {
  student: Student;
  gatepass: Gatepass;
  gatepassPreApply: GatepassPreApply;
  msg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public gatepassService: GatepassService) {
    this.student = navParams.get("student");
    this.gatepassPreApply = navParams.get("gatepassPreApply");
    this.gatepass = navParams.get("gatepass");
  }

  ionViewDidLoad() {
    console.log('Hello GatepassFinal Page');
  }

  sendGatepassRequest() {
    console.log(JSON.stringify(this.gatepass));
    this.gatepassService.applyGatepass(this.gatepass, this.student.enrollment_no)
      .subscribe(
        data => {
          this.msg = data.message;
          console.log(JSON.stringify(data));
          this.navCtrl.setRoot(GatepassHome);
        },
        error => console.log(error));

        // Do error handling
  }

}
