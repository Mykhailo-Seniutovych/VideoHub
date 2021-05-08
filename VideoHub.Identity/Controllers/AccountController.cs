using IdentityModel;
using IdentityServer4;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;
using VideoHub.Identity.Models;

namespace VideoHub.Identity.Controllers
{
    [Route("Account")]
    public class AccountController : Controller
    {
        private readonly IIdentityServerInteractionService _interactionService;

        public AccountController(IIdentityServerInteractionService interactionService)
        {
            _interactionService = interactionService;
        }

        [HttpGet("Login")]
        public IActionResult Login(string returnUrl)
        {
            var model = new LoginModel
            {
                ReturnUrl = returnUrl
            };
            return View("Login", model);
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            // TODO: implement proper authentication using ASP.Net Identity
            var isUserAuthenticated = model.Username == "a" && model.Password == "1";
            if (!isUserAuthenticated)
            {
                return Unauthorized();
            };

            var claims = new Claim[]
            {
                new Claim(JwtClaimTypes.Subject, "12345"),
                new Claim(JwtClaimTypes.Name, "Alice Smith"),
                new Claim(JwtClaimTypes.GivenName, "Alice"),
                new Claim(JwtClaimTypes.FamilyName, "Smith"),
                new Claim(JwtClaimTypes.Email, "AliceSmith@email.com")
            };

            var user = new IdentityServerUser("12345")
            {
                DisplayName = "Alice Smith",
                AdditionalClaims = claims,
            };

            await HttpContext.SignInAsync(user, null);

            return Redirect(model.ReturnUrl);
        }

        [HttpGet("Logout")]
        public async Task<IActionResult> Logout(string logoutId)
        {
            await HttpContext.SignOutAsync();
            var logoutContext = await _interactionService.GetLogoutContextAsync(logoutId);
            return Redirect(logoutContext.PostLogoutRedirectUri);
        }
    }
}
