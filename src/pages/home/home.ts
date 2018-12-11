import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, Content } from 'ionic-angular';
import { LoginService } from '../../providers/login.service';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { PostsService } from '../../providers/posts.services';
import { PublishPage } from '../publish/publish';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  postsList = [];
  page = 1;

  @ViewChild(Content) content: Content;

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
    this.posts.getPosts(this.page).subscribe((res:any) => {
      this.postsList = this.postsList.concat(res.posts);
      
      if (res.hasNext) this.page++;
      if (refresher) refresher.complete();

      console.log(res);
    },erro => {
      console.log(erro);
    });
  }

  goToPublish(from: string) {
    this.navCtrl.push(PublishPage, {type: from});
  }

  doRefresh(refresher) {
    this.page = 1;
    this.postsList = []
    this.getPosts(refresher);
  }

  doInfinite(refresher) {
    this.getPosts(refresher);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

}