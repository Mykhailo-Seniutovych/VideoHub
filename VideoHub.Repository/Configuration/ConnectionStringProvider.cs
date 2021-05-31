using Microsoft.Extensions.Configuration;
using VideoHub.Repository.Interfaces;

namespace VideoHub.Repository.Configuration
{
    public class ConnectionStringProvider : IConnectionStringProvider
    {
        public string ConnectionString { get; }

        public ConnectionStringProvider(IConfiguration configuration)
        {
            ConnectionString = configuration.GetConnectionString("VideoHub");
        }
    }
}
