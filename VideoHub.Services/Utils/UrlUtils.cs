namespace VideoHub.Services.Utils
{
    public static class UrlUtils
    {
        public static string Combine(string uri1, string uri2)
        {
            uri1 = string.IsNullOrEmpty(uri1) ? "" : uri1.TrimEnd('/');
            uri2 = string.IsNullOrEmpty(uri2) ? "" : uri2.TrimStart('/');
            return string.Format($"{uri1}/{uri2}");
        }
    }
}
