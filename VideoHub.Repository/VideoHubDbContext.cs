using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Models;

namespace VideoHub.Repository
{
    public class VideoHubDbContext : DbContext
    {
        public DbSet<Video> Videos { get; set; }
        public DbSet<Channel> Channels { get; set; }

        private readonly IConnectionStringProvider _connectionStringProvider;

        // Must be present when creating a new DB migration
        public VideoHubDbContext()
        {
        }

        public VideoHubDbContext(IConnectionStringProvider connectionStringProvider)
        {
            _connectionStringProvider = connectionStringProvider;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_connectionStringProvider.ConnectionString);
            optionsBuilder.LogTo(Console.WriteLine, LogLevel.Information);
            optionsBuilder.EnableSensitiveDataLogging();

            // Use this line when you create a new DB migration.
            // The migration will connect from a host machine into a docker container using this connection string
            // optionsBuilder.UseNpgsql("User ID=postgres;Password=admin;Host=localhost;Port=5433;Database=VideoHub;Pooling=true;Minimum Pool Size=0;Maximum Pool Size=100;Connection Lifetime=0;");
        }
    }
}
