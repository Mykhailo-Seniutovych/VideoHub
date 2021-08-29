using AutoMapper;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Abstractions;
using System.Threading.Tasks;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Models;
using VideoHub.Services.DTO;
using VideoHub.Services.Interfaces;
using VideoHub.Services.Utils;

namespace VideoHub.Services.Services
{
    public class VideosService : IVideosService
    {
        private readonly IVideosRepository _videosRepository;
        private readonly IFileSystem _fileSystem;
        private readonly IMapper _mapper;

        public VideosService(IVideosRepository videosRepository, IMapper mapper, IFileSystem fileSystem)
        {
            _videosRepository = videosRepository;
            _mapper = mapper;
            _fileSystem = fileSystem;
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

        public async Task<int> UploadVideo(UploadingVideoDto videoDto)
        {
            var video = _mapper.Map<Video>(videoDto);
            try
            {
                video.VideoPath = await SaveVideoFile(videoDto.VideoFile);
                video.ImagePreviewPath = await SaveImagePreview(videoDto.ImagePreview);
                var createdVideoId = await _videosRepository.AddVideo(video);
                return createdVideoId;
            }
            catch (Exception ex)
            {
                CleanupFiles(video);
                throw;
            }
        }

        private async Task<string> SaveVideoFile(IFormFile video)
        {
            var extension = Path.GetExtension(video.FileName);
            var staticFilePath = _fileSystem.Path.Combine(Folders.Videos, $"{Guid.NewGuid()}{extension}");
            var savingPath = _fileSystem.Path.Combine(Folders.StaticFolderRoot, staticFilePath);
            using var fileStream = new FileStream(savingPath, FileMode.CreateNew);
            await video.CopyToAsync(fileStream);
            return staticFilePath;
        }

        private async Task<string> SaveImagePreview(IFormFile image)
        {
            var extension = Path.GetExtension(image.FileName);
            var staticFilePath = _fileSystem.Path.Combine(Folders.ImagePreview, $"{Guid.NewGuid()}{extension}");
            var savingPath = _fileSystem.Path.Combine(Folders.StaticFolderRoot, staticFilePath);
            using var fileStream = new FileStream(savingPath, FileMode.CreateNew);
            await image.CopyToAsync(fileStream);
            return staticFilePath;
        }

        private void CleanupFiles(Video video)
        {
            var actualVideoPath = _fileSystem.Path.Combine(Folders.StaticFolderRoot, video.VideoPath);
            _fileSystem.File.Delete(actualVideoPath);

            var actualImagePreviewPath = _fileSystem.Path.Combine(Folders.StaticFolderRoot, video.ImagePreviewPath);
            _fileSystem.File.Delete(actualImagePreviewPath);
        }
    }
}
