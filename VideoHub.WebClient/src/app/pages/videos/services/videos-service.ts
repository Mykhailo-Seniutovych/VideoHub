import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { URLS } from "./../../../utils/urls";
import { Video } from "../models";

const previewUrls = [
    "https://i.ytimg.com/vi/Hv-sbtCAz9Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHovKnV-8KN_UyTG6S2MfJlusmRg",
    "https://i.ytimg.com/vi/42QuXLucH3Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPmdHaFImSyzVlQw3iZ-2m2FzGrw",
    "https://i.ytimg.com/vi/ILHEYblJ7uM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmaWPoDWNEVTu2AQmi87laq7rB9A",
    "https://i.ytimg.com/vi/iFt_LsFRFEQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0doD_X6dRVjaB5WPZwgNgTLZR-g"];
const channelImageUrls = [
    "https://yt3.ggpht.com/ytc/AAUvwnilx_uJDjcDWrYjdAe64v0VbUyREpcobnn2RUbHeA=s68-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AAUvwnibaxGZz82h7ZuasxR1zwVTkJ0vNWfckQIHrIAEbg=s68-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s68-c-k-c0x00ffffff-no-rj",
]

@Injectable({
    providedIn: "root"
})
export class VideosService {
    private readonly apiBaseUrl = `${URLS.API}/api/videos`;



    constructor(private readonly httpClient: HttpClient) {
    }

    videos$ = this.httpClient.get<Video[]>(this.apiBaseUrl)
        .pipe(map(videos => {
            videos.forEach(v => {
                const previewUrl = previewUrls[Math.floor(Math.random() * 3)];
                const imageUrl = channelImageUrls[Math.floor(Math.random() * 2)];
                v.imagePreviewUrl = previewUrl;
                v.channelImageUrl = imageUrl;
            });
            return videos;
        }));
}
