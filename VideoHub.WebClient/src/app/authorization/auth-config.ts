import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "src/environments/environment";

export const AUTH_CONFIG: AuthConfig = {
    issuer: environment.identityUrl,
    redirectUri: environment.webClientUrl,
    clientId: "web_client",
    responseType: "code",
    scope: "openid profile api",
    oidc: true,
    showDebugInformation: true,
};
