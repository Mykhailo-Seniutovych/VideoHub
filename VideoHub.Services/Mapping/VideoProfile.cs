using AutoMapper;
using VideoHub.Repository.Models;
using VideoHub.Services.DTO;

namespace VideoHub.Services.Mapping
{
    public class VideoProfile : Profile
    {
        public VideoProfile()
        {
            CreateMap<Video, VideoDto>();
        }
    }
}
