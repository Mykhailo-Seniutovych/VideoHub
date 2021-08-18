import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VideoComponent } from "./video/video.component";
import { VideosListComponent } from "./videos-list/videos-list.component";

const routes: Routes = [{
    path: ":id",
    component: VideoComponent,
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
