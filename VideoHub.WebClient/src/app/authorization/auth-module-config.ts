import { OAuthModuleConfig } from "angular-oauth2-oidc";

export const AUTH_MODULE_CONFIG: OAuthModuleConfig = {
    resourceServer: {
        allowedUrls: ["https://localhost:5001/api"],
        sendAccessToken: true
    }
};
