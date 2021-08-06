import { OAuthModuleConfig } from "angular-oauth2-oidc";
import { URLS } from "../utils";

export const AUTH_MODULE_CONFIG: OAuthModuleConfig = {
    resourceServer: {
        allowedUrls: [`${URLS.API}/api`],
        sendAccessToken: true
    }
};
