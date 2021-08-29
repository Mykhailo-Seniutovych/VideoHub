using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Logging;
using System.Net.Http;
using System.Reflection;
using VideoHub.Api.Extensions;
using VideoHub.Services.Settings;

namespace VideoHub.Api
{
    public class Startup
    {
        private readonly IConfiguration _config;
        private readonly IWebHostEnvironment _environment;
        private readonly AppSettings _settings;

        public Startup(IWebHostEnvironment environment, IConfiguration config)
        {
            _environment = environment;
            _config = config;
            _settings = _config.Get<AppSettings>();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            IdentityModelEventSource.ShowPII = true;

            services.AddCors();
            services
                .AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", ConfigureJwtOptions);
            services.AddAuthorization();
            services.AddControllers();

            services.ConfigureDependencyInjection();
            services.Configure<AppSettings>(_config);

            services.AddDatabase();
            services.AddAutoMapper(Assembly.Load("VideoHub.Services"));
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(options => options
                .WithOrigins(_settings.AllowedOrigins)
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseStaticFiles();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void ConfigureJwtOptions(JwtBearerOptions options)
        {
            options.Authority = _settings.IdentityUrl;
            options.Audience = "api";

            // ignore SSL validation of identity server in development
            if (_environment.IsCustomDevelopment())
            {
                options.BackchannelHttpHandler = new HttpClientHandler
                {
                    ServerCertificateCustomValidationCallback = (a, b, c, d) => true
                };
            }
        }
    }
}
