import { AuthConfig } from "angular-oauth2-oidc";
import { URLS } from "../utils";

export const AUTH_CONFIG: AuthConfig = {
    issuer: URLS.IDENTITY,
    redirectUri: URLS.WEB_CLIENT,
    clientId: "web_client",
    responseType: "code",
    scope: "openid profile api",
    oidc: true,
    showDebugInformation: true,
};
