import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Gatepass } from '../../classes/gatepass';
import { Student } from '../../classes/student';
import { GatepassPreApply } from '../../classes/gatepass-pre-apply';
import { GatepassFinal } from '../gatepass-final/gatepass-final';

/*
  Generated class for the VariableTiming page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-variable-timing',
  templateUrl: 'variable-timing.html'
})
export class VariableTiming {
  student: Student;
  gatepass: Gatepass;
  gatepassPreApply: GatepassPreApply;

  public wardens;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    this.student = navParams.get("student");
    this.gatepassPreApply = navParams.get("gatepassPreApply");
    this.wardens = this.gatepassPreApply.warden_list;
    this.gatepass = navParams.get("gatepass");
  }

  ionViewDidLoad() {
    console.log('Hello VariableTiming Page');

  }

  applyGatepass() {
    this.gatepass.gatepass_type = 2;

    this.navCtrl.push(GatepassFinal, {
      student: this.student,
      gatepassPreApply: this.gatepassPreApply,
      gatepass: this.gatepass
    });
  }
}
