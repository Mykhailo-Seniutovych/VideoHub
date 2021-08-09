import { environment } from "./../../environments/environment.prod";
import { OAuthModuleConfig } from "angular-oauth2-oidc";

export const AUTH_MODULE_CONFIG: OAuthModuleConfig = {
    resourceServer: {
        allowedUrls: [`${environment.apiUrl}/api`],
        sendAccessToken: true
    }
};
