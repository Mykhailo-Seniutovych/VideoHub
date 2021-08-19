using Microsoft.AspNetCore.Http;

namespace VideoHub.Services.DTO
{
    public class UploadingVideoDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public IFormFile ImagePreview { get; set; }
        public IFormFile VideoFile { get; set; }
        public int ChannelId { get; set; }
    }
}
