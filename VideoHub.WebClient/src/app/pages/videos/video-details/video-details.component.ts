import { ActivatedRoute } from "@angular/router";
import { catchError } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { SnackBarService } from "./../../../shared/services/snackbar.service";
import { VideoDetails } from "../models";
import { VideosService } from "../services/videos.service";

@Component({
    selector: "app-video-details",
    templateUrl: "./video-details.component.html",
    styleUrls: ["./video-details.component.scss"]
})
export class VideoDetailsComponent implements OnInit {

    error: string;
    video$: Observable<VideoDetails>;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly videosService: VideosService,
        private readonly snackBarService: SnackBarService) {
    }

    async ngOnInit(): Promise<void> {
        const id: number = this.route.snapshot.params.id;
        this.video$ = this.videosService.video$(id).pipe(catchError((error: any) => {
            this.snackBarService.showError(error.message);
            return EMPTY;
        }));
    }
}
