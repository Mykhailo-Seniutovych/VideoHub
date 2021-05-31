using VideoHub.Repository.Interfaces;

namespace VideoHub.Repository.Repositories
{
    public class RepositoryBase
    {
        private readonly IConnectionStringProvider _connectionStringProvider;
        public RepositoryBase(IConnectionStringProvider connectionStringProvider)
        {
            _connectionStringProvider = connectionStringProvider;
        }

        protected VideoHubDbContext CreateDbContext()
        {
            return new VideoHubDbContext(_connectionStringProvider);
        }
    }
}
