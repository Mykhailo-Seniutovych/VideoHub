import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AUTH_MODULE_CONFIG } from "./authorization";
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
        OAuthModule.forRoot(AUTH_MODULE_CONFIG),
        HttpClientModule,
        BrowserModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
