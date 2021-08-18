START TRANSACTION;

ALTER TABLE "Videos" ADD "VideoPath" text NOT NULL DEFAULT '/';

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20210818105619_AddVideoUrl', '5.0.6');

COMMIT;

