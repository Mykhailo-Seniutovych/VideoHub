import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "../models";


@Injectable({
    providedIn: "root"
})
export class VideosService {
    private readonly apiBaseUrl = `${environment.apiUrl}/api/videos`;

    constructor(private readonly httpClient: HttpClient) {
    }

    videos$ = (searchedTitle: string): Observable<Video[]> =>
        this.httpClient.get<Video[]>(`${this.apiBaseUrl}?searchedTitle=${searchedTitle}`)
}
