#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["VideoHub.Identity/VideoHub.Identity.csproj", "VideoHub.Identity/"]
RUN dotnet restore "VideoHub.Identity/VideoHub.Identity.csproj"
COPY . .
WORKDIR "/src/VideoHub.Identity"
RUN dotnet build "VideoHub.Identity.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VideoHub.Identity.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VideoHub.Identity.dll"]
