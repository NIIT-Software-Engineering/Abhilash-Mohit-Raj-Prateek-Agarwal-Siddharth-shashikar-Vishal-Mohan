import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the TimetableDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timetable-details',
  templateUrl: 'timetable-details.html'
})
export class TimetableDetails {
  lists = [
    {
      id: "8:30-9:30",
      id2 :"CS231",
      id3 :"LT211"
    }
  ];
  days =[
    "Monday"

  ];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TimetableDetails Page');
  }

}
