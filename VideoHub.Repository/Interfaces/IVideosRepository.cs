using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Models;

namespace VideoHub.Repository.Interfaces
{
    public interface IVideosRepository
    {
        Task<List<Video>> GetVideos();
        Task<Video> GetVideo(int videoId);
    }
}
