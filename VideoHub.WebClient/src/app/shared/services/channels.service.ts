import { Channel } from "../models";
import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ChannelsService {
    private readonly apiBaseUrl = `${environment.apiUrl}/api/channels`;

    constructor(private readonly http: HttpClient) {
    }

    channels$ = this.http.get<Channel[]>(this.apiBaseUrl);
}

