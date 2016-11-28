import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/*
  Generated class for the FixedTiming page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fixed-timing',
  templateUrl: 'fixed-timing.html'
})
export class FixedTiming {
  public fixed = {
    depdate:'8/11/16',
    arrivaldate:'8/11/16',
    outtime: '05:00 PM',
    intime: '09:00 PM',
  }

  constructor(public navCtrl: NavController, public alerCtrl: AlertController) {}
doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Request Send',
      message: 'Bon Voyage!',
      buttons: ['Ok']
    });
    alert.present()
}

  ionViewDidLoad() {
    console.log('Hello FixedTiming Page');
  }

}
