import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { SearchService } from "./../../../shared/services/search.service";
import { switchMap } from "rxjs/operators";
import { Video } from "../models";
import { VideosService } from "./../services/videos-service";

@Component({
    selector: "app-videos-list",
    templateUrl: "./videos-list.component.html",
    styleUrls: ["./videos-list.component.scss"]
})
export class VideosListComponent {
    videos$: Observable<Video[]> = this.searchService.searchedValue$
        .pipe(switchMap((searchedValue => this.videosService.videos$(searchedValue))));

    constructor(
        private readonly videosService: VideosService,
        private readonly searchService: SearchService) {
    }
}
