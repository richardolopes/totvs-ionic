import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginService } from '../../providers/login.service';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { PostsService } from '../../providers/posts.services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  postsList = [];
  constructor(public navCtrl: NavController, 
              private loginService: LoginService, 
              public alertCtrl: AlertController,
              private posts: PostsService,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.getPosts();
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
            const loader = this.loadingCtrl.create({
              content: "Saindo..."
            });
            loader.present();
            this.loginService.doLogout();
            this.navCtrl.setRoot(LoginPage);
            loader.dismiss();
          }
        }
      ]
    });
    confirm.present();
  }

  public getPosts(refresher?) {
    this.posts.getPosts().subscribe((res:any) => {
      this.postsList = res.posts;
      
      if (refresher) refresher.complete();
      console.log(res);
    },erro => {
      console.log(erro);
    });
  }

  doRefresh(refresher) {
    this.getPosts(refresher);
  }

}