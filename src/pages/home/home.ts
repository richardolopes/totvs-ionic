import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../providers/login.service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private loginService: LoginService) {

  }

  doLogout() {
    this.loginService.doLogout();
    this.navCtrl.setRoot(LoginPage);
  }

}
