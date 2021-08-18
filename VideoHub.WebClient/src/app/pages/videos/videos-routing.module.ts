import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VideoDetailsComponent } from "./video-details/video-details.component";
import { VideosListComponent } from "./videos-list/videos-list.component";

const routes: Routes = [{
    path: ":id",
    component: VideoDetailsComponent,
}, {
    path: "",
    component: VideosListComponent,
}];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class VideosRoutingModule { }
