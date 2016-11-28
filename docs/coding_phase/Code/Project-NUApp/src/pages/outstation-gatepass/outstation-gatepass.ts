import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { Gatepass } from '../../classes/gatepass';
import { Student } from '../../classes/student';
import { GatepassPreApply } from '../../classes/gatepass-pre-apply';
import { GatepassFinal } from '../gatepass-final/gatepass-final';

/*
  Generated class for the OutstationGatepass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-outstation-gatepass',
  templateUrl: 'outstation-gatepass.html'
})
export class OutstationGatepass {

  student: Student;
  gatepass: Gatepass;
  gatepassPreApply: GatepassPreApply;
  public wardens;

  constructor(public navCtrl: NavController, public alerCtrl: AlertController, public navParams: NavParams) {
    this.student = navParams.get("student");
    this.gatepassPreApply = navParams.get("gatepassPreApply");
    this.wardens = this.gatepassPreApply.warden_list;
    this.gatepass = new Gatepass();
  }

  ionViewDidLoad() {
    console.log('Hello OutstationGatepass Page');
  }

 applyGatepass() {
    this.gatepass.gatepass_type = 3;

    this.navCtrl.push(GatepassFinal, {
      student: this.student,
      gatepassPreApply: this.gatepassPreApply,
      gatepass: this.gatepass
    });
  }
}
