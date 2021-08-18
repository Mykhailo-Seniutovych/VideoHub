import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSliderModule } from "@angular/material/slider";
import { NgModule } from "@angular/core";
import { VideoComponent } from "./video/video.component";
import { VideosListComponent } from "./videos-list/videos-list.component";
import { VideosRoutingModule } from "./videos-routing.module";

@NgModule({
    declarations: [
        VideosListComponent,
        VideoComponent
    ],
    imports: [
        VideosRoutingModule,
        CommonModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatSliderModule,
        MatProgressBarModule
    ],
    providers: [],
})
export class VideosModule { }
