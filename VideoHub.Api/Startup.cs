using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Net.Http;

namespace VideoHub.Api
{
    public class Startup
    {
        //TODO: Move to config
        private const string InternalIdentityUrl = "https://videohub.identity:443";
        private const string ExternalWebClientUrl = "http://localhost:5000";

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
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors(options => options
                    .WithOrigins(ExternalWebClientUrl)
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
