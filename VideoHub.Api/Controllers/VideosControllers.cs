using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Models;

namespace VideoHub.Api.Controllers
{
    [Route("api/videos")]
    public class VideosControllers : BaseController
    {
        private readonly IVideosRepository _videosRepository;

        public VideosControllers(IVideosRepository videosRepository)
        {
            _videosRepository = videosRepository;
        }

        [HttpGet("")]
        public async Task<List<Video>> GetVideos()
        {
            return await _videosRepository.GetVideos();
        }

        [HttpGet("{videoId}")]
        public async Task<Video> GetVideo(int videoId)
        {
            return await _videosRepository.GetVideo(videoId);

        }
    }
}