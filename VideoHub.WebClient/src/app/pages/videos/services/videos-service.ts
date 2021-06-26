import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { URLS } from "./../../../utils/urls";
import { Video } from "../models";


@Injectable({
    providedIn: "root"
})
export class VideosService {
    private readonly apiBaseUrl = `${URLS.API}/api/videos`;



    constructor(private readonly httpClient: HttpClient) {
    }

    videos$ = this.httpClient.get<Video[]>(this.apiBaseUrl);
}
