import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { UserService } from '../providers/user-service';
import { Login } from '../pages/login/login';
import { GatepassHome } from '../pages/gatepass-home/gatepass-home';
import { Timetable } from '../pages/timetable/timetable';
import { Attendance } from '../pages/attendance/attendance';
import { LibraryHome } from '../pages/library-home/library-home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,
    public userservice: UserService,
    public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.userservice.isLoggedIn().then(
        res => {
          if (res == false)
            this.rootPage = Login;
          else
            this.rootPage = GatepassHome;
        }

      );
      this.pages = [
      { title: 'Timetable', component: Timetable },
      { title: 'Gatepass', component: GatepassHome },
      { title: 'Attendance', component: Attendance },
      { title: 'Library', component: LibraryHome }
    ];
        // this.navCtrl.push(Login);

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {

    this.menu.close();
    this.userservice.isLoggedIn().then(
      res => {
        if (res == false)
          this.nav.setRoot(Login);
        else
          this.nav.setRoot(page.component);
      });
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
  }
}
