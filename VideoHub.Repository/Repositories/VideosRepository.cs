using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Models;

namespace VideoHub.Repository.Repositories
{
    public class VideosRepository : RepositoryBase, IVideosRepository
    {
        public VideosRepository(IConnectionStringProvider connectionStringProvider)
            : base(connectionStringProvider)
        {
        }

        public async Task<Video> GetVideo(int videoId)
        {
            using var dbContext = CreateDbContext();
            var video = await dbContext.Videos.AsNoTracking().FirstAsync(v => v.VideoId == videoId);
            return video;
        }

        public async Task<List<Video>> GetVideos()
        {
            using var dbContext = CreateDbContext();
            var videos = await dbContext.Videos.AsNoTracking().ToListAsync();
            return videos;
        }
    }
}
