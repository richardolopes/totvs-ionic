import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SessionService } from "./session.service";

@Injectable()
export class HttpService {
    constructor(private http: HttpClient, 
                private session: SessionService) {}

    get(url: string) {
        const token = this.session.token;
        let headers = new HttpHeaders();

        headers = headers.set('authorization', token);

        return this.http.get(url, {headers: headers});
    }
}