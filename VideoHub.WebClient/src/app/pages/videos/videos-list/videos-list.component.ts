import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "../models";
import { VideosService } from "./../services/videos-service";

@Component({
    selector: "app-videos-list",
    templateUrl: "./videos-list.component.html",
    styleUrls: ["./videos-list.component.scss"]
})
export class VideosListComponent {
    videos$: Observable<Video[]> = this.videosService.videos$;

    constructor(private readonly videosService: VideosService) {
    }
}
