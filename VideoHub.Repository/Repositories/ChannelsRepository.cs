using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Models;

namespace VideoHub.Repository.Repositories
{
    public class ChannelsRepository : RepositoryBase, IChannelsRepository
    {
        public ChannelsRepository(IConnectionStringProvider connectionStringProvider)
            : base(connectionStringProvider)
        {
        }

        public async Task<List<Channel>> GetChannels()
        {
            using var dbContext = CreateDbContext();
            var channels = await dbContext
                .Channels
                .AsNoTracking()
                .ToListAsync();
            return channels;
        }
    }
}
