using Microsoft.Extensions.DependencyInjection;
using VideoHub.Repository.Configuration;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Repositories;

namespace VideoHub.Api
{
    public static class DependencyInjection
    {
        public static void ConfigureDependencyInjection(this IServiceCollection services)
        {
            services.AddSingleton<IConnectionStringProvider, ConnectionStringProvider>();
            services.AddSingleton<IVideosRepository, VideosRepository>();
        }
    }
}
