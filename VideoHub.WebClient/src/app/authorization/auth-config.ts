import { AuthConfig } from "angular-oauth2-oidc";

export const AUTH_CONFIG: AuthConfig = {
    issuer: "https://localhost:5002",
    redirectUri: "http://localhost:5000",
    clientId: "web_client",
    responseType: "code",
    scope: "openid profile api",
    oidc: true,
    showDebugInformation: true,
};
