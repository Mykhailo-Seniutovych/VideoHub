import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AUTH_MODULE_CONFIG } from "./authorization";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./shared/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { NgModule } from "@angular/core";
import { OAuthModule } from "angular-oauth2-oidc";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        OAuthModule.forRoot(AUTH_MODULE_CONFIG),
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
