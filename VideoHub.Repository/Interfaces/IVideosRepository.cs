﻿using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Models;

namespace VideoHub.Repository.Interfaces
{
    public interface IVideosRepository
    {
        Task<List<Video>> GetVideos(string searchedTitle);
        Task<Video> GetVideo(int videoId);
        Task<int> AddVideo(Video video);
    }
}
