import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { HttpService } from "./http.services";

@Injectable()
export class PostsService {
    constructor(private http: HttpService, private storage: Storage) {}

    getPosts() {
        return this.http.get("http://thfservices.totvs.com.br:8085/posts");
    }
}