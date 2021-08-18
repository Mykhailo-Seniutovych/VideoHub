using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Services.DTO;
using VideoHub.Services.Interfaces;

namespace VideoHub.Api.Controllers
{
    [Route("api/videos")]
    public class VideosControllers : BaseController
    {
        private readonly IVideosService _videosService;

        public VideosControllers(IVideosService videosService)
        {
            _videosService = videosService;
        }

        [HttpGet("")]
        public async Task<List<VideoDto>> GetVideos(string searchedTitle)
        {
            return await _videosService.GetVideos(searchedTitle);
        }

        [HttpGet("{videoId}")]
        public async Task<VideoDto> GetVideo(int videoId)
        {
            return await _videosService.GetVideo(videoId);
        }
    }
}