import { Component, OnInit } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
    text = "unauthenticated";

    constructor(private readonly oauthService: OAuthService) {

    }

    async ngOnInit(): Promise<void> {
    }
}
