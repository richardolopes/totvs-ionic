import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { CameraService } from '../../providers/camera.services';

@Component({
    selector: 'page-publish',
    templateUrl: 'publish.html'
})

export class PublishPage {
    type = '';
    photo = './assets/imgs/card.jpg';

    enableLocation: boolean = true;

    constructor(private navParams: NavParams, private cameraService: CameraService) {
        this.type = this.navParams.get('type');

        console.log(this.type);
    }

    ionViewDidLoad() {
        this.getPhoto();
    }

    async getPhoto() {
        if (this.type === 'camera') {
            // this.cameraService.getFromCamera();
        } else {
            // this.cameraService.getFromAlbum().then(image => { this.photo = image; });
        }
    }
}