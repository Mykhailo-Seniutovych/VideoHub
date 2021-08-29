using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Services.DTO;

namespace VideoHub.Services.Interfaces
{
    public interface IChannelsService
    {
        public Task<List<ChannelDto>> GetChannels();
    }
}
