using AutoMapper;
using Microsoft.Extensions.Options;
using VideoHub.Repository.Models;
using VideoHub.Services.DTO;
using VideoHub.Services.Settings;

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
                return _appsettings.ApiUrl + source.Channel.ImagePath;
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
                return _appsettings.ApiUrl + source.ImagePreviewPath;
            }
        }
    }
}
