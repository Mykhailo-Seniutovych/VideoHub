import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { VideosListComponent } from "./videos-list/videos-list.component";
import { VideosRoutingModule } from "./videos-routing.module";

@NgModule({
    declarations: [
        VideosListComponent
    ],
    imports: [
        VideosRoutingModule,
        CommonModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
    ],
    providers: [],
})
export class VideosModule { }
