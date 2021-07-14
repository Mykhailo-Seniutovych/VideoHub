using Microsoft.EntityFrameworkCore.Migrations;

namespace VideoHub.Repository.Migrations
{
    public partial class RenameUrlToPath : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImagePreviewUrl",
                table: "Videos",
                newName: "ImagePreviewPath");

            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Channels",
                newName: "ImagePath");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImagePreviewPath",
                table: "Videos",
                newName: "ImagePreviewUrl");

            migrationBuilder.RenameColumn(
                name: "ImagePath",
                table: "Channels",
                newName: "ImageUrl");
        }
    }
}
