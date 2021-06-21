import { AUTH_CONFIG } from "./auth-config";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Subject } from "rxjs";
import { User } from "./../shared/models/user";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private userSub = new Subject<User>();
    user$ = this.userSub.asObservable();

    get isUserAuthenticated(): boolean {
        return this.oauthService.hasValidAccessToken() && this.oauthService.hasValidIdToken();
    }

    get user(): User {
        const { name: fullName } = this.oauthService.getIdentityClaims() as { name: string };
        const user = new User();
        user.fullName = fullName;
        return user;
    }

    constructor(private readonly oauthService: OAuthService) {
    }

    async authenticate(): Promise<void> {
        this.oauthService.configure(AUTH_CONFIG);
        await this.oauthService.loadDiscoveryDocument();
        await this.oauthService.tryLoginCodeFlow();

        if (!this.isUserAuthenticated) {
            await this.oauthService.initCodeFlow();
        }
        this.userSub.next(this.user);
    }

    async logout(): Promise<void> {
        await this.oauthService.logOut();
    }
}
