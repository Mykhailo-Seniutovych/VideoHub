import { AUTH_CONFIG } from "./auth-config";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    get isUserAuthenticated(): boolean {
        return this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken();
    }

    get userFullName(): string {
        const { name } = this.oauthService.getIdentityClaims() as { name: string };
        return name;
    }

    constructor(private readonly oauthService: OAuthService) {
    }

    async authenticate(): Promise<void> {
        if (this.isUserAuthenticated) {
            return;
        }

        this.oauthService.configure(AUTH_CONFIG);
        await this.oauthService.loadDiscoveryDocument();
        await this.oauthService.tryLoginCodeFlow();

        if (!this.isUserAuthenticated) {
            await this.oauthService.initCodeFlow();
        }
    }

    async logout(): Promise<void> {
        await this.oauthService.logOut();
    }
}
