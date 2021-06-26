using System.Collections.Generic;

namespace VideoHub.Repository.Models
{
    public class Channel
    {
        public int ChannelId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public List<Video> Videos { get; set; }
    }
}
