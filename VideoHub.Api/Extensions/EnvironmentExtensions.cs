using Microsoft.Extensions.Hosting;

namespace VideoHub.Api.Extensions
{
    public static class EnvironmentExtensions
    {
        public static bool IsCustomDevelopment(this IHostEnvironment hostEnvironment)
        {
            return hostEnvironment.IsDevelopment() || hostEnvironment.IsEnvironment("Development-LAN");
        }
    }
}
