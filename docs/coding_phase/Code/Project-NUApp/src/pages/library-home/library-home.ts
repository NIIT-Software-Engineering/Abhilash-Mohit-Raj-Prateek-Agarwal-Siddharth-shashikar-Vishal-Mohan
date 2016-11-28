import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LibraryHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-library-home',
  templateUrl: 'library-home.html'
})
export class LibraryHome {
  public book = {
    bookname1:'Operating System Concepts',
    issueddate1:'8/11/16',
    duedate1:'15/11/16',
    bookname2:'Digital Logic Circuits',
    issueddate2:'8/11/16',
    duedate2:'15/11/16',
    fine: '300Rs'
  }
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LibraryHome Page');
  }

}
