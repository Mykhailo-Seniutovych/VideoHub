import { AuthService } from "./authorization";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    username: string;

    constructor(private readonly authService: AuthService) {

    }

    async ngOnInit(): Promise<void> {
       await this.authService.authenticate();
       this.username = this.authService.userFullName;
    }

    async logout(): Promise<void> {
        await this.authService.logout();
    }
}
