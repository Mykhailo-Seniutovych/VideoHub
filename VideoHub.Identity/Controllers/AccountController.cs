using IdentityModel;
using IdentityServer4;
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
        [HttpGet("Login")]
        public async Task<IActionResult> Login(string returnUrl)
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
    }
}
