using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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
            var video = await dbContext.Videos
                .AsNoTracking()
                .Include(v => v.Channel)
                .FirstAsync(v => v.VideoId == videoId);
            return video;
        }

        public async Task<List<Video>> GetVideos(string searchedTitle)
        {
            using var dbContext = CreateDbContext();
            var videos = await dbContext.Videos
                .Where(v =>
                    string.IsNullOrEmpty(searchedTitle)
                    || v.Title.ToLower().Contains(searchedTitle.ToLower()))
                .AsNoTracking()
                .Include(v => v.Channel)
                .ToListAsync();
            return videos;
        }

        public async Task<int> AddVideo(Video video)
        {
            using var dbContext = CreateDbContext();
            await dbContext.Videos.AddAsync(video);
            await dbContext.SaveChangesAsync();
            return video.VideoId;
        }
    }
}
