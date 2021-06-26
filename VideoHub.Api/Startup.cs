using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Net.Http;
using System.Reflection;
using VideoHub.Api.Extensions;
using VideoHub.Repository.Configuration;
using VideoHub.Repository.Interfaces;
using VideoHub.Repository.Repositories;
using VideoHub.Services.Interfaces;
using VideoHub.Services.Services;

namespace VideoHub.Api
{
    public class Startup
    {
        //TODO: Move to config
        private const string InternalIdentityUrl = "https://videohub.identity:443";
        private string[] _allowedOrigins = new[] { "http://192.168.0.112:5000", "http://localhost:5000" };

        private readonly IWebHostEnvironment _environment;
        public Startup(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services
                .AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", ConfigureJwtOptions);
            services.AddAuthorization();
            services.AddControllers();

            services.AddSingleton<IConnectionStringProvider, ConnectionStringProvider>();
            services.AddSingleton<IVideosRepository, VideosRepository>();
            services.AddSingleton<IVideosService, VideosService>();

            services.AddDatabase();
            services.AddAutoMapper(Assembly.Load("VideoHub.Services"));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(options => options
                    .WithOrigins(_allowedOrigins)
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void ConfigureJwtOptions(JwtBearerOptions options)
        {
            options.Authority = InternalIdentityUrl;
            options.Audience = "api";

            // ignore SSL validation of identity server in development
            if (_environment.IsDevelopment())
            {
                options.BackchannelHttpHandler = new HttpClientHandler
                {
                    ServerCertificateCustomValidationCallback = (a, b, c, d) => true
                };
            }
        }
    }
}
