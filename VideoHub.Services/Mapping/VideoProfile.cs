using AutoMapper;
using VideoHub.Repository.Models;
using VideoHub.Services.DTO;

namespace VideoHub.Services.Mapping
{
    public class VideoProfile : Profile
    {
        //TODO: move to config, should be different for different environments
        private const string BaseApiUrl = "https://localhost:5001";

        public VideoProfile()
        {
            CreateMap<Video, VideoDto>()
                .ForMember(
                    dest => dest.ChannelImageUrl,
                    opt => opt.MapFrom(s => BaseApiUrl + s.Channel.ImagePath))
                .ForMember(
                    dest => dest.ImagePreviewUrl,
                    opt => opt.MapFrom(s => BaseApiUrl + s.ImagePreviewPath));
        }
    }
}
