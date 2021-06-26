import { combineLatest, Observable } from "rxjs";
import { Component } from "@angular/core";
import { map } from "rxjs/operators";
import { SearchService } from "./../../../shared/services/search.service";
import { Video } from "../models";
import { VideosService } from "./../services/videos-service";

@Component({
    selector: "app-videos-list",
    templateUrl: "./videos-list.component.html",
    styleUrls: ["./videos-list.component.scss"]
})
export class VideosListComponent {
    videos$: Observable<Video[]> = combineLatest(
        [this.videosService.videos$, this.searchService.searchedValue$]).pipe(map(([videos, searchedTitle]) =>
            this.filterVideos(videos, searchedTitle)));

    constructor(
        private readonly videosService: VideosService,
        private readonly searchService: SearchService) {
    }

    private filterVideos(videos: Video[], searchedTitle: string): Video[] {
        return searchedTitle
            ? videos.filter(video => video.title.trim().toLocaleLowerCase().includes(searchedTitle.trim().toLocaleLowerCase()))
            : videos;
    }
}
