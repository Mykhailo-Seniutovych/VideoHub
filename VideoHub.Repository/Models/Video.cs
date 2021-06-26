﻿namespace VideoHub.Repository.Models
{
    public class Video
    {
        public int VideoId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImagePreviewUrl { get; set; }

        public Channel Channel { get; set; }
    }
}
