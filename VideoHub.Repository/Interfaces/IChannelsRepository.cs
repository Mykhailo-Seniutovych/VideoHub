using System.Collections.Generic;
using System.Threading.Tasks;
using VideoHub.Repository.Models;

namespace VideoHub.Repository.Interfaces
{
    public interface IChannelsRepository
    {
        Task<List<Channel>> GetChannels();
    }
}
