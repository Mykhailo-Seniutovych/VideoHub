import { AboutComponent } from "./pages/about/about.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AUTH_MODULE_CONFIG } from "./authorization";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./shared/components/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { MainNavigationComponent } from "./shared/components/main-navigation/main-navigation.component";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { NgModule } from "@angular/core";
import { OAuthModule } from "angular-oauth2-oidc";
import { RouterModule } from "@angular/router";
import { UploadVideoComponent } from "./shared/components/upload-video/upload-video.component";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        MainNavigationComponent,
        HeaderComponent,
        UploadVideoComponent,
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
        MatSnackBarModule,
        RouterModule,
        MatMenuModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
