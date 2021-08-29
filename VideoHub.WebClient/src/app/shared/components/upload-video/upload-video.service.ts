import { environment } from "./../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UploadingVideo } from "./uploading-video";

@Injectable({
    providedIn: "root"
})
export class UploadVideoService {
    private readonly apiBaseUrl = `${environment.apiUrl}/api/videos`;

    constructor(private readonly http: HttpClient) {
    }

    uploadVideo$(video: UploadingVideo): Observable<number> {
        const formData = new FormData();
        formData.append("Title", video.title);
        formData.append("Description", video.description);
        formData.append("ChannelId", `${video.channelId}`);
        formData.append("VideoFile", video.videoFile);
        formData.append("ImagePreview", video.imagePreview);

        return this.http.post<number>(this.apiBaseUrl, formData);
    }
}
