import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { OAuthModule } from "angular-oauth2-oidc";
import { VideosListComponent } from "./videos-list/videos-list.component";
import { VideosRoutingModule } from "./videos-routing.module";


@NgModule({
    declarations: [
        VideosListComponent
    ],
    imports: [
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: ["https://localhost:5001"],
                sendAccessToken: true
            }
        }),
        VideosRoutingModule,
        CommonModule,
        HttpClientModule,
    ],
    providers: [],
})
export class VideosModule { }
