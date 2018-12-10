import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private user: string;
  private password: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public loginService: LoginService) {

  }

  doLogin() {
    this.loginService.doLogin(this.user, this.password).then(
      (res) => {
        this.navCtrl.setRoot(HomePage);
      }
    ).catch(() => {
      this.showToast("Usuário e/ou senha inválidos.");
    });
  }

  showToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
