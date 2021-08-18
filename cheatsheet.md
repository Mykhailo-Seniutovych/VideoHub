#EF Core add migration
dotnet ef migrations add {name}

#EF Core script migration
dotnet ef migrations script RenameUrlToPath --output ./Migrations/Scripts/{number}_{name}.sql

#Update DB
docker ps
docker commit {ID} michael400/videohub.db
push from docker desktop