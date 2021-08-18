using Microsoft.EntityFrameworkCore.Migrations;

namespace VideoHub.Repository.Migrations
{
    public partial class AddVideoUrl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "VideoPath",
                table: "Videos",
                type: "text",
                nullable: false,
                defaultValue: "/");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "VideoPath",
                table: "Videos");
        }
    }
}
