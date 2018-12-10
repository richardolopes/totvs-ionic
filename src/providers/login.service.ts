import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Storage } from '@ionic/storage';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient, private storage: Storage) {

    }

    doLogin(user: string, password: string) {
        const body = {
            login: user,
            password: password
        };

        return this.http.post('http://thfservices.totvs.com.br:8085/authenticate', body).toPromise();
    }

    doLogout() {
        this.storage.clear();
    }
}