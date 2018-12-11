import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SessionService } from '../providers/session.service';
import { PublishPage } from '../pages/publish/publish';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private session: SessionService) {
    platform.ready().then(() => {
      this.session.getUser().then(user => {
        if (user) {
          this.rootPage = PublishPage;
          // this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

