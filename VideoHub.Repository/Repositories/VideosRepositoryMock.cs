﻿using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Models;

namespace VideoHub.Repository.Repositories
{
    public class VideosRepositoryMock : IVideosRepository
    {
        public async Task<Video> GetVideo(int videoId)
        {
            return new Video
            {
                VideoId = 1,
                Channel = new Channel { ChannelId = 13 },
                Description = "Boris Johnson gets Covid shot",
                Title = "Boris Johnson",
                ImagePreviewPath = "/path/johnson.jpg",
            };
        }

        public async Task<List<Video>> GetVideos(string searchedTitle)
        {
            return new List<Video>
            {
                new Video
                {
                    VideoId = 1,
                    Channel = new Channel { ChannelId = 13 },
                    Title = "Boris Johnson",
                    ImagePreviewPath = "/path/johnson.jpg",
                },
                new Video
                {
                    VideoId = 2,
                    Channel = new Channel { ChannelId = 19 },
                    Title = "Donals J. Trump",
                    ImagePreviewPath = "/path/trump.jpg",
                }
            };
        }

        public Task<int> AddVideo(Video video)
        {
            return Task.FromResult(19);
        }
    }
}
