using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using VideoHub.Repository;
using VideoHub.Repository.Interfaces;

namespace VideoHub.Api.Extensions
{
    public static class DbContext
    {
        public static void AddDatabase(this IServiceCollection services)
        {
            var connectionString = services.BuildServiceProvider().GetService<IConnectionStringProvider>().ConnectionString;
            services.AddDbContext<VideoHubDbContext>(options => options.UseNpgsql(connectionString));
        }
    }
}