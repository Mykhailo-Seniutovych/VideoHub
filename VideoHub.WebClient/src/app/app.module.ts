import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { OAuthModule } from "angular-oauth2-oidc";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: ["http://localhost:5002"],
                sendAccessToken: true
            }
        }),
        HttpClientModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
