import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class SessionService {
    constructor(private storage: Storage) {

    }

    getUser() {
        return this.storage.get('user');
    }
}