import { AuthService } from "./authorization";
import { Component, OnInit } from "@angular/core";
import { MainNavigationService } from "./shared/services/main-navigation.service";
import { PAGE_ROUTES } from "./utils";
import { Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    isNavOpened$ = this.navigationService.isNavOpened$;
    navMode$ = this.navigationService.navMode$;

    constructor(
        private readonly authService: AuthService,
        private readonly router: Router,
        private readonly navigationService: MainNavigationService,) {
    }

    async ngOnInit(): Promise<void> {
        await this.authService.authenticate();
        if (window.location.pathname === "/") {
            await this.router.navigateByUrl(PAGE_ROUTES.videos);
        }
    }

    onNavOpenedChanged(value: boolean): void {
        this.navigationService.setOpened(value);
    }
}
