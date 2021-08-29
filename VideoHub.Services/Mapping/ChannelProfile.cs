using AutoMapper;
using Microsoft.Extensions.Options;
using VideoHub.Repository.Models;
using VideoHub.Services.DTO;
using VideoHub.Services.Settings;
using VideoHub.Services.Utils;

namespace VideoHub.Services.Mapping
{
    public class ChannelProfile : Profile
    {

        public ChannelProfile()
        {
            CreateMap<Channel, ChannelDto>()
                .ForMember(
                    dest => dest.ImageUrl,
                    opt => opt.MapFrom<ChannelImageUrlResolver>());

            CreateMap<UploadingVideoDto, Video>();
        }

        private class ChannelImageUrlResolver : IValueResolver<Channel, ChannelDto, string>
        {
            private readonly AppSettings _appsettings;

            public ChannelImageUrlResolver(IOptions<AppSettings> appsettingsOptions)
            {
                _appsettings = appsettingsOptions.Value;
            }

            public string Resolve(Channel source, ChannelDto destination, string destMember, ResolutionContext context)
            {
                return UrlUtils.Combine(_appsettings.ApiUrl, source.ImagePath);
            }
        }
    }
}
