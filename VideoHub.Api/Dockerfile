#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["VideoHub.Api/VideoHub.Api.csproj", "VideoHub.Api/"]
RUN dotnet restore "VideoHub.Api/VideoHub.Api.csproj"
COPY . .
WORKDIR "/src/VideoHub.Api"
RUN dotnet build "VideoHub.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VideoHub.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VideoHub.Api.dll"]

# RUN COMMAND, TODO: Remove later when it's not needed
#docker run --rm -it -p 5001:443 -e ASPNETCORE_URLS="https://+" -e ASPNETCORE_HTTPS_PORT=5001 -e ASPNETCORE_Kestrel__Certificates__Default__Password="123" -e ASPNETCORE_Kestrel__Certificates__Default__Path=/https/dev-ssl-certificate.pfx -v c:\temp\:/https/ videohub.api