import { environment } from "./../../environments/environment.prod";
import { OAuthModuleConfig } from "angular-oauth2-oidc";

export const AUTH_MODULE_CONFIG: OAuthModuleConfig = {
    resourceServer: {
        allowedUrls: [`${environment.apiUrl}/api`, "https://192.168.0.112:5001/api"],
        sendAccessToken: true
    }
};
