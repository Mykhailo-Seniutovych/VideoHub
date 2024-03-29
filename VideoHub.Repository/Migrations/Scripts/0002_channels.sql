﻿START TRANSACTION;

ALTER TABLE "Videos" ADD "ChannelId" integer NULL;

CREATE TABLE "Channels" (
    "ChannelId" integer NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "Name" text NULL,
    "Description" text NULL,
    "ImageUrl" text NULL,
    CONSTRAINT "PK_Channels" PRIMARY KEY ("ChannelId")
);

CREATE INDEX "IX_Videos_ChannelId" ON "Videos" ("ChannelId");

ALTER TABLE "Videos" ADD CONSTRAINT "FK_Videos_Channels_ChannelId" FOREIGN KEY ("ChannelId") REFERENCES "Channels" ("ChannelId") ON DELETE RESTRICT;

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20210626095131_Channels', '5.0.6');

COMMIT;

