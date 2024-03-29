﻿using Microsoft.AspNetCore.Mvc;
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
        public async Task<VideoDetailsDto> GetVideo(int videoId)
        {
            return await _videosService.GetVideo(videoId);
        }

        [HttpPost("")]
        [RequestSizeLimit(100 * 1024 * 1024)]
        public async Task<int> UploadVideo([FromForm] UploadingVideoDto video)
        {
            var createdVideoId = await _videosService.UploadVideo(video);
            return createdVideoId;
        }
    }
}