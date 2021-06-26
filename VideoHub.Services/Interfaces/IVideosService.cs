using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Services.DTO;

namespace VideoHub.Services.Interfaces
{
    public interface IVideosService
    {
        Task<List<VideoDto>> GetVideos();
        Task<VideoDto> GetVideo(int videoId);
    }
}
