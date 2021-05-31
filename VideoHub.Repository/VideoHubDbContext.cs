using Microsoft.EntityFrameworkCore;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Models;

namespace VideoHub.Repository
{
    public class VideoHubDbContext : DbContext
    {
        public DbSet<Video> Videos { get; set; }

        private readonly IConnectionStringProvider _connectionStringProvider;
        public VideoHubDbContext(IConnectionStringProvider connectionStringProvider)
        {
            _connectionStringProvider = connectionStringProvider;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_connectionStringProvider.ConnectionString);
        }
    }
}
