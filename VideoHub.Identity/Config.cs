using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace VideoHub.Identity
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResources => new IdentityResource[]
        {
            new IdentityResources.OpenId(),
        };

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                new ApiScope("api")
            };

        public static IEnumerable<ApiResource> Apis = new[]
        {
            new ApiResource("api")
            {
                Scopes = { "api" }
            }
        };

        public static IEnumerable<Client> Clients => new Client[]
        {
            new Client
            {
                ClientId = "web_client",
                AllowedGrantTypes = GrantTypes.Implicit,
                RequireClientSecret = false,
                AllowAccessTokensViaBrowser = true,
                AlwaysIncludeUserClaimsInIdToken = true,
                AllowedScopes = new List<string>
                {
                    IdentityServerConstants.StandardScopes.OpenId,
                    "api"
                },
                RedirectUris = { "http://127.0.0.1:5501/callback.html" },
                AllowedCorsOrigins = { "http://127.0.0.1:5501" },
            }
        };
    }
}
