import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {

    }

    doLogin(user: string, password: string) {
        const body = {
            login: user,
            password: password
        };

        return this.http.post('http://thfservices.totvs.com.br:8085/authenticate', body).toPromise();
    }
}