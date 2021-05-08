import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { VideosListComponent } from "./videos-list/videos-list.component";
import { VideosRoutingModule } from "./videos-routing.module";


@NgModule({
    declarations: [
        VideosListComponent
    ],
    imports: [
        BrowserModule,
        VideosRoutingModule
    ],
    providers: [],
})
export class VideosModule { }
