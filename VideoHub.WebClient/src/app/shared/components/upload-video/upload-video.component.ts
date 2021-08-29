import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, combineLatest, EMPTY } from "rxjs";
import { catchError, map, shareReplay, startWith } from "rxjs/operators";
import { Channel } from "../../models";
import { ChannelsService } from "./../../services";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { PAGE_ROUTES } from "src/app/utils";
import { Router } from "@angular/router";
import { SnackBarService } from "./../../services/snackbar.service";
import { UploadingVideo } from "./uploading-video";
import { UploadVideoService } from "./upload-video.service";

@Component({
    selector: "app-upload-video",
    templateUrl: "./upload-video.component.html",
    styleUrls: ["./upload-video.component.scss"]
})
export class UploadVideoComponent {
    @ViewChild("imagePreview", { read: ElementRef }) imagePreviewInput: ElementRef<HTMLInputElement>;
    @ViewChild("videoFile", { read: ElementRef }) videoFileInput: ElementRef<HTMLInputElement>;


    maxTitleLength = 50;
    maxDescLength = 2000;
    uploadForm: FormGroup;
    isUploadInProgressSub = new BehaviorSubject(false);

    readonly channels$ = this.channelsService.channels$.pipe(
        shareReplay(1),
        catchError((error: any) => {
        this.snackBarService.showError(error.message);
        this.dialogRef.close();
        return EMPTY;
    }));

    isLoadInProgress$ = combineLatest([this.isUploadInProgressSub, this.channels$])
        .pipe(
            map(([isUploadInProgress, _]) => isUploadInProgress),
            startWith(true));

    private allControlsTouched = false;

    get isUploadDisabled(): boolean {
        return !this.uploadForm.valid && this.allControlsTouched;
    }

    get videoTitleControl(): AbstractControl {
        return this.uploadForm.get("videoTitle");
    }
    get showTileLengthWarn(): boolean {
        return this.maxTitleLength - this.videoTitleControl.value.length <= 10;
    }
    get titleCharsLeft(): number {
        return this.maxTitleLength - this.videoTitleControl.value.length;
    }

    get videoDescriptionControl(): AbstractControl {
        return this.uploadForm.get("videoDescription");
    }
    get showDescLengthWarn(): boolean {
        return this.maxDescLength - this.videoDescriptionControl.value.length <= 10;
    }
    get descCharsLeft(): number {
        return this.maxDescLength - this.videoDescriptionControl.value.length;
    }

    get channelControl(): AbstractControl {
        return this.uploadForm.get("channel");
    }

    get channelControlValue(): Channel {
        return this.uploadForm.get("channel").value as Channel;
    }

    get videoFileControl(): AbstractControl {
        return this.uploadForm.get("videoFile");
    }
    get imagePreviewControl(): AbstractControl {
        return this.uploadForm.get("imagePreview");
    }

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly dialogRef: MatDialogRef<UploadVideoComponent>,
        private readonly uploadVideoService: UploadVideoService,
        private readonly channelsService: ChannelsService,
        private readonly snackBarService: SnackBarService,
        private readonly router: Router,
    ) {
        this.uploadForm = this.formBuilder.group({
            videoTitle: ["", [Validators.required, Validators.maxLength(this.maxTitleLength)]],
            videoDescription: ["", [Validators.required, Validators.maxLength(this.maxDescLength)]],
            channel: ["", [Validators.required]],
            videoFile: [null, [Validators.required]],
            videoFileName: [""],
            imagePreview: [null, [Validators.required]],
            imagePreviewName: [""]
        });
    }

    onChooseVideoFile(event: any): void {
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.videoFileInput.nativeElement.click();
    }

    onVideoFileChange(event: any): void {
        if (!event || !event.target || !event.target.files || event.target.files.length === 0) {
            return;
        }
        this.uploadForm.patchValue({ videoFile: event.target.files[0] });
        this.uploadForm.patchValue({ videoFileName: event.target.files[0].name });
    }

    onChooseImagePreview(event: any): void {
        event.stopPropagation();
        event.stopImmediatePropagation();
        this.imagePreviewInput.nativeElement.click();
    }

    onImagePreviewChange(event: any): void {
        if (!event || !event.target || !event.target.files || event.target.files.length === 0) {
            return;
        }
        this.uploadForm.patchValue({ imagePreview: event.target.files[0] });
        this.uploadForm.patchValue({ imagePreviewName: event.target.files[0].name });
    }

    onSubmitForm(): void {
        if (this.uploadForm.valid) {
           this.isUploadInProgressSub.next(true);
           this.submitValidForm();
        } else {
           Object.keys(this.uploadForm.controls).forEach(field => {
               const control = this.uploadForm.get(field);
               control.markAsTouched({ onlySelf: true });
           });
           this.allControlsTouched = true;
        }
    }

    private submitValidForm(): void {
        const video = new UploadingVideo();
        video.title = this.uploadForm.get("videoTitle").value;
        video.description = this.uploadForm.get("videoDescription").value;
        video.videoFile = this.uploadForm.get("videoFile").value;
        video.imagePreview = this.uploadForm.get("imagePreview").value;
        video.channelId = (this.uploadForm.get("channel").value as Channel).channelId;
        this.uploadVideoService.uploadVideo$(video).pipe(catchError((error: any) => {
            this.snackBarService.showError(error.message);
            this.isUploadInProgressSub.next(false);
            return EMPTY;
        })).subscribe(async createdId => this.redirectToVideo(createdId));
    }

    private async redirectToVideo(videoId: number): Promise<void> {
        this.dialogRef.close();
        await this.router.navigateByUrl(PAGE_ROUTES.video(videoId));
        this.isUploadInProgressSub.next(false);
    }
}
