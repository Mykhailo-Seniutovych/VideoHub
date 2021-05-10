import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Video } from "../models";

@Injectable({
    providedIn: "root"
})
export class VideosService {
    // TODO: Move base url to a config
    private readonly apiBaseUrl = "https://localhost:5001/api/videos";

    constructor(private readonly httpClient: HttpClient) {
    }

    videos$ = this.httpClient.get<Video[]>(this.apiBaseUrl);
}
