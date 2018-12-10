import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginService } from '../../providers/login.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private user: string;
  private password: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public loginService: LoginService, private storage: Storage, public loadingCtrl: LoadingController) {

  }

  doLogin() {
    const loader = this.loadingCtrl.create({
      content: "Verificando..."
    });
    loader.present();
    this.loginService.doLogin(this.user, this.password).then(
      (res) => {
        this.storage.set('user', res).then(() => {
          loader.dismiss();
          this.navCtrl.setRoot(HomePage);
        });
      }
    ).catch(() => {
      loader.dismiss();
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
