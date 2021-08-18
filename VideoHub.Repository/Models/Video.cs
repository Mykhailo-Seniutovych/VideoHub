namespace VideoHub.Repository.Models
{
    public class Video
    {
        public int VideoId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImagePreviewPath { get; set; }
        public string VideoPath { get; set; }
        public Channel Channel { get; set; }
    }
}
