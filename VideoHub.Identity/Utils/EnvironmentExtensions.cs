using Microsoft.Extensions.Hosting;

namespace VideoHub.Identity.Utils
{
    public static class EnvironmentExtensions
    {
        public static bool IsCustomDevelopment(this IHostEnvironment hostEnvironment)
        {
            return hostEnvironment.IsDevelopment() || hostEnvironment.IsEnvironment("Development-LAN");
        }
    }
}
