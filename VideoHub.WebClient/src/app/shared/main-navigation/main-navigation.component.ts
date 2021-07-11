import { Component } from "@angular/core";
import { MainNavigationService } from "./../services/main-navigation.service";

@Component({
    selector: "app-main-navigation",
    templateUrl: "./main-navigation.component.html",
    styleUrls: ["./main-navigation.component.scss"]
})
export class MainNavigationComponent {
    constructor(private readonly navService: MainNavigationService) { }

    hideMainNav(): void {
        this.navService.setOpened(false);
    }
}
