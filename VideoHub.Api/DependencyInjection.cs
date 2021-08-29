using Microsoft.Extensions.DependencyInjection;
using System.IO.Abstractions;
using VideoHub.Repository.Configuration;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Repositories;
using VideoHub.Services.Interfaces;
using VideoHub.Services.Services;

namespace VideoHub.Api
{
    public static class DependencyInjection
    {
        public static void ConfigureDependencyInjection(this IServiceCollection services)
        {
            services.AddSingleton<IConnectionStringProvider, ConnectionStringProvider>();
            services.AddSingleton<IVideosRepository, VideosRepository>();
            services.AddSingleton<IChannelsRepository, ChannelsRepository>();
            services.AddSingleton<IVideosService, VideosService>();
            services.AddSingleton<IChannelsService, ChannelsService>();
            services.AddSingleton<IFileSystem, FileSystem>();
        }
    }
}
