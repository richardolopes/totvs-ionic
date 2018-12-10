import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../providers/login.service';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private loginService: LoginService, public alertCtrl: AlertController) {

  }

  doLogout() {
    const confirm = this.alertCtrl.create({
      title: 'Sair',
      message: 'Quer mesmo sair?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.loginService.doLogout();
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();

  }

}
