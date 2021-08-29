using AutoMapper;
using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Interfaces;
using VideoHub.Services.DTO;
using VideoHub.Services.Interfaces;

namespace VideoHub.Services.Services
{
    public class ChannelsService : IChannelsService
    {
        private readonly IChannelsRepository _channelsRepository;
        private readonly IMapper _mapper;
        public ChannelsService(IChannelsRepository channelsRepository, IMapper mapper)
        {
            _channelsRepository = channelsRepository;
            _mapper = mapper;
        }

        public async Task<List<ChannelDto>> GetChannels()
        {
            var channels = await _channelsRepository.GetChannels();
            var channelDtos = _mapper.Map<List<ChannelDto>>(channels);
            return channelDtos;
        }
    }
}
