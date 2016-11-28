import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GatepassPreApply } from '../../classes/gatepass-pre-apply';
import { Student } from '../../classes/student';
import { GatepassFinal } from '../gatepass-final/gatepass-final';
import { VariableTiming } from '../variable-timing/variable-timing';
import { Gatepass } from '../../classes/gatepass';

/*
  Generated class for the LocalGatepass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-local-gatepass',
  templateUrl: 'local-gatepass.html'
})
export class LocalGatepass {
  student: Student;
  gatepassPreApply: GatepassPreApply;
  gatepass: Gatepass;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.student = navParams.get("student");
    this.gatepassPreApply = navParams.get("gatepassPreApply");
    this.gatepass = new Gatepass();
  }

  ionViewDidLoad() {
    console.log('Hello LocalGatepass Page');
  }

  fixedTiming() {
    // Add fixed timing details.
    // Directly go to the final page.
    // TODO
    this.gatepass.gatepass_type = 1;

    this.navCtrl.push(GatepassFinal, {
      student: this.student,
      gatepassPreApply: this.gatepassPreApply,
      gatepass: this.gatepass
    });

  }

  variableTiming() {
    // Add variable timing data and then navigate to gatepassvartime2
    this.gatepass.gatepass_type = 2;

    this.navCtrl.push(VariableTiming, {
      student: this.student,
      gatepassPreApply: this.gatepassPreApply,
      gatepass: this.gatepass
    });
  }

}
