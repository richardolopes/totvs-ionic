import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class SessionService {
    public token: string;
    public userName: string;

    constructor(private storage: Storage) {}

    getUser() {
        return this.storage.get('user').then(user => {
            if (user && user.token) {
                this.token = user.token;
                this.userName = user.name;
            }
            
            return user;
        });
    }

    setUser(user) {
        this.token = user.token;
        this.userName = user.name;
        return this.storage.set('user', user);
    }
}