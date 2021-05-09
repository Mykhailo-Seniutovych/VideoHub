import { AuthService } from "./authorization";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    username: string;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router) {
    }

    async ngOnInit(): Promise<void> {
        this.username = "Joker";
        //await this.authService.authenticate();
        //this.username = this.authService.userFullName;
        //await this.router.navigateByUrl(PAGE_ROUTES.videos);
    }

    async logout(): Promise<void> {
        //await this.authService.logout();
    }
}
