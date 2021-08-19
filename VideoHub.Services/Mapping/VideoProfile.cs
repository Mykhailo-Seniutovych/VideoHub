using AutoMapper;
using Microsoft.Extensions.Options;
using VideoHub.Repository.Models;
using VideoHub.Services.DTO;
using VideoHub.Services.Settings;
using VideoHub.Services.Utils;

namespace VideoHub.Services.Mapping
{
    public class VideoProfile : Profile
    {
        public VideoProfile()
        {
            CreateMap<Video, VideoDto>()
                .ForMember(
                    dest => dest.ChannelImageUrl,
                    opt => opt.MapFrom<ChannelImageUrlResolver>())
                .ForMember(
                    dest => dest.ImagePreviewUrl,
                    opt => opt.MapFrom<ImagePreviewUrlResolver>());

            CreateMap<Video, VideoDetailsDto>()
                .ForMember(
                    dest => dest.ChannelImageUrl,
                    opt => opt.MapFrom<ChannelImageUrlResolver>())
                .ForMember(
                    dest => dest.ImagePreviewUrl,
                    opt => opt.MapFrom<ImagePreviewUrlResolver>())
                .ForMember(
                    dest => dest.VideoUrl,
                    opt => opt.MapFrom<VideoUrlResolver>());

            CreateMap<UploadingVideoDto, Video>();
        }

        private class ChannelImageUrlResolver : IValueResolver<Video, VideoDto, string>
        {
            private readonly AppSettings _appsettings;

            public ChannelImageUrlResolver(IOptions<AppSettings> appsettingsOptions)
            {
                _appsettings = appsettingsOptions.Value;
            }

            public string Resolve(Video source, VideoDto destination, string destMember, ResolutionContext context)
            {
                return UrlUtils.Combine(_appsettings.ApiUrl, source.Channel.ImagePath);
            }
        }

        private class ImagePreviewUrlResolver : IValueResolver<Video, VideoDto, string>
        {
            private readonly AppSettings _appsettings;

            public ImagePreviewUrlResolver(IOptions<AppSettings> appsettingsOptions)
            {
                _appsettings = appsettingsOptions.Value;
            }

            public string Resolve(Video source, VideoDto destination, string destMember, ResolutionContext context)
            {
                return UrlUtils.Combine(_appsettings.ApiUrl, source.ImagePreviewPath);
            }
        }

        private class VideoUrlResolver : IValueResolver<Video, VideoDto, string>
        {
            private readonly AppSettings _appsettings;

            public VideoUrlResolver(IOptions<AppSettings> appsettingsOptions)
            {
                _appsettings = appsettingsOptions.Value;
            }

            public string Resolve(Video source, VideoDto destination, string destMember, ResolutionContext context)
            {
                return UrlUtils.Combine(_appsettings.ApiUrl, source.VideoPath);
            }
        }
    }
}
