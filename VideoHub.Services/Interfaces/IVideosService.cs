using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Services.DTO;

namespace VideoHub.Services.Interfaces
{
    public interface IVideosService
    {
        Task<List<VideoDto>> GetVideos(string searchedTitle);
        Task<VideoDetailsDto> GetVideo(int videoId);
    }
}
