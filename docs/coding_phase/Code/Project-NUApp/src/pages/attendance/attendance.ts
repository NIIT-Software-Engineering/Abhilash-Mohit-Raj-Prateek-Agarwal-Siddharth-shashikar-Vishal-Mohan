import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Attendance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html'
})
export class Attendance {

  constructor(public navCtrl: NavController) {}
  lists = [
    { id : "Compiler Design",
      bgcolor: '#fb9667',
      nclass:'92.5%'},

    {id : "Microprocessor and Microcontroller",
      bgcolor: 'mediumpurple',
      nclass:'95.8%'},

    {id : "Basics of Management",
      bgcolor: 'orange',
      nclass:'91%'},

    {id : "Theory of Computation",
      bgcolor: 'mediumturquoise',
      nclass:'100%'},

    {id : "Computer Networking",
      bgcolor: ' lightcoral',
      nclass:'87.5%'},

    {id : "Software Engineering",
      bgcolor: 'yellowgreen',
      nclass:'94.5%'}

  ];
  ionViewDidLoad() {
    console.log('Hello Attendance Page');
  }

}
