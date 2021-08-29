using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Services.DTO;
using VideoHub.Services.Interfaces;

namespace VideoHub.Api.Controllers
{
    [Route("api/channels")]
    public class ChannelsController
    {
        private readonly IChannelsService _channelsService;

        public ChannelsController(IChannelsService channelsService)
        {
            _channelsService = channelsService;
        }

        [HttpGet("")]
        public async Task<List<ChannelDto>> GetChannels()
        {
            return await _channelsService.GetChannels();
        }
    }
}
