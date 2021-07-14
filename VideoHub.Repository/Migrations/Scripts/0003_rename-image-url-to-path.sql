START TRANSACTION;

ALTER TABLE "Videos" RENAME COLUMN "ImagePreviewUrl" TO "ImagePreviewPath";

ALTER TABLE "Channels" RENAME COLUMN "ImageUrl" TO "ImagePath";

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20210712145906_RenameUrlToPath', '5.0.6');

COMMIT;

