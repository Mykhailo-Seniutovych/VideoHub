﻿using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace VideoHub.Identity
{
    public static class Config
    {
        public static IEnumerable<IdentityResource> IdentityResources => new IdentityResource[]
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile(),
        };

        public static IEnumerable<ApiScope> ApiScopes =>
            new ApiScope[]
            {
                new ApiScope("api")
            };

        public static IEnumerable<ApiResource> Apis =>
            new[]
            {
                new ApiResource("api")
                {
                    Scopes = { "api" }
                }
            };

        public static IEnumerable<Client> GetClients(string[] clientUrls) => new Client[]
        {
            new Client
            {
                ClientId = "web_client",
                AllowedGrantTypes = GrantTypes.Code,
                RequirePkce = true,
                RequireClientSecret = false,
                AllowAccessTokensViaBrowser = true,
                AlwaysIncludeUserClaimsInIdToken = true,
                AllowedScopes = new List<string>
                {
                    IdentityServerConstants.StandardScopes.OpenId,
                    IdentityServerConstants.StandardScopes.Profile,
                    "api"
                },
                RedirectUris = clientUrls,
                PostLogoutRedirectUris = clientUrls,
                AllowedCorsOrigins = clientUrls,
            }
        };
    }
}
