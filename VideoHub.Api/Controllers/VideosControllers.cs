using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using VideoHub.Api.Models;

namespace VideoHub.Api.Controllers
{
    [Route("api/videos")]
    public class VideosControllers : BaseController
    {
        private List<Video> _videos = new List<Video>
        {
            new Video
            {
                VideoId = 1,
                Title = "How does OAuth2 work?",
                Description = "Short video abouth OAuth2 protocol specifications and how it works"
            },
            new Video
            {
                VideoId = 2,
                Title = "Introduction to ASP.Net Core",
                Description = "The first video in a series of videos about ASP.Net Core"
            },
            new Video
            {
                VideoId = 3,
                Title = "Learn C# in 30 minutes",
                Description = "You think it's impossible to learn C# in just 30 minutes? Check out this video."
            }
        };

        [HttpGet("")]
        public List<Video> GetVideos()
        {
            return _videos;
        }

        [HttpGet("{videoId}")]
        public Video GetVideo(int videoId)
        {
            return _videos.Single(v => v.VideoId == videoId);
        }
    }
}