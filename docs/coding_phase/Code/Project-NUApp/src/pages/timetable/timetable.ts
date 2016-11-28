import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Student } from '../../classes/student';
import { UserService } from '../../providers/user-service';
import { TimetableDetails } from '../timetable-details/timetable-details';

/*
  Generated class for the Timetable page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html'
})
export class Timetable {

  student: Student;
  lists = [
    {
      id : "Monday",
      bgcolor: '#fb9667',
      nclass:'4 lectures'
    },

    {
      id : "Tuesday",
      bgcolor: 'mediumpurple',
      nclass:'7 lectures'
    },

    {
      id : "Wednesday",
      bgcolor: 'orange',
      nclass:'6 lectures'
    },

    {
      id : "Thrusday",
      bgcolor: 'mediumturquoise',
      nclass:'8 lectures'
    },

    {
      id : "Friday",
      bgcolor: ' lightcoral',
      nclass:'8 lectures'
    },

    {
      id : "Saturday",
      bgcolor: 'yellowgreen',
      nclass:'8 lectures'
    }
  ];

  constructor(public navCtrl: NavController, private userService: UserService) {


  }

  ionViewDidLoad() {
    console.log('Hello Timetable Page');

    this.userService.getUser().then(
      s => {console.log("At timetable page: ", JSON.stringify(s)); }
    );

  }

  goToOtherPage(){
    this.navCtrl.push(TimetableDetails);
  }

}
