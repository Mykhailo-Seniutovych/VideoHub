import { AboutComponent } from "./pages/about/about.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AUTH_MODULE_CONFIG } from "./authorization";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./shared/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { MainNavigationComponent } from "./shared/main-navigation/main-navigation.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NgModule } from "@angular/core";
import { OAuthModule } from "angular-oauth2-oidc";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        MainNavigationComponent,
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
        MatSidenavModule,
        MatListModule,
        RouterModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
