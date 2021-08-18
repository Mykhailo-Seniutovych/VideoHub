﻿using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Interfaces;
using VideoHub.Services.DTO;
using VideoHub.Services.Interfaces;

namespace VideoHub.Services.Services
{
    public class VideosService : IVideosService
    {
        private readonly IVideosRepository _videosRepository;
        private readonly IMapper _mapper;

        public VideosService(IVideosRepository videosRepository, IMapper mapper)
        {
            _videosRepository = videosRepository;
            _mapper = mapper;
        }

        public async Task<VideoDetailsDto> GetVideo(int videoId)
        {
            var video = await _videosRepository.GetVideo(videoId);
            var videoDto = _mapper.Map<VideoDetailsDto>(video);
            return videoDto;
        }

        public async Task<List<VideoDto>> GetVideos(string searchedTitle)
        {
            var videos = await _videosRepository.GetVideos(searchedTitle);
            var videoDtos = _mapper.Map<List<VideoDto>>(videos);
            return videoDtos;
        }
    }
}
