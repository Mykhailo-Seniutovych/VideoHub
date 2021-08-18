import { Component, ElementRef, HostListener, Input, ViewChild } from "@angular/core";
import { MatSliderChange } from "@angular/material/slider";
import { ThemePalette } from "@angular/material/core";

type ScreenMode = "normal" | "custom-fullscreen" | "default-fullscreen";
@Component({
    selector: "app-video",
    templateUrl: "./video.component.html",
    styleUrls: ["./video.component.scss"]
})
export class VideoComponent {

    @ViewChild("video") videoRef: ElementRef<HTMLVideoElement>;
    @ViewChild("videoContainer") videoContainerRef: ElementRef<HTMLDivElement>;
    @ViewChild("progress", { read: ElementRef }) progressRef: ElementRef<HTMLElement>;

    @Input() videoUrl: string;

    private get videoEl(): HTMLVideoElement {
        return this.videoRef.nativeElement;
    }

    private get videoContainerEl(): HTMLDivElement {
        return this.videoContainerRef.nativeElement;
    }

    isPlaying = false;
    isPlayerActivated = true;
    isMuted = false;
    videoProgress = 0;
    currentTime = "0:00";
    videoDuration: string;
    color: ThemePalette = "primary";
    screenMode: "normal" | "custom-fullscreen" | "default-fullscreen" = "normal";

    onDurationChanged(): void {
        this.videoDuration = this.getFormattedTime(this.videoEl.duration);
    }

    onProgressChanged(e: MatSliderChange): void {
        this.videoEl.currentTime = (e.value / e.source.max) * this.videoEl.duration;
    }

    @HostListener("document:keydown", ["$event"])
    onKeyDown(event: KeyboardEvent): void {
        if (event.key === "ArrowLeft") {
            this.rewind();
        } else if (event.key === "ArrowRight") {
            this.fastForward();
        } else if (event.key === " ") {
            event.preventDefault();
            this.togglePlay();
        } else if (event.key === "f") {
            this.toggleFullScreen();
        } else if (event.key === "m") {
            this.toggleMuted();
        }
        console.log(event);
    }

    togglePlay(): void {
        if (this.isPlaying) {
            this.videoEl.pause();
        }
        else {
            this.videoEl.play();
        }
    }

    togglePlayer(): void {
        this.isPlayerActivated = !this.isPlayerActivated;
    }

    onPaused(): void {
        this.isPlaying = false;
    }

    onPlayed(): void {
        this.isPlaying = true;
    }

    toggleMuted(): void {
        this.isMuted = !this.isMuted;
    }

    async toggleFullScreen(): Promise<void> {
        let newScreenMode: ScreenMode;
        if (this.screenMode === "custom-fullscreen") {
            newScreenMode = this.exitCustomFullScreen();
        } else {
            newScreenMode = this.requestFullScreen();
        }
        setTimeout(() => this.screenMode = newScreenMode, 100);
    }

    rewind(): void {
        this.videoEl.currentTime -= 5;
    }

    fastForward(): void {
        this.videoEl.currentTime += 5;
    }

    onVideoTimeUpdated(): void {
        this.currentTime = this.getFormattedTime(this.videoEl.currentTime);
        this.videoProgress = (this.videoEl.currentTime / this.videoEl.duration) * 100;
    }

    requestFullScreen(): ScreenMode {
        if (this.videoContainerEl.requestFullscreen) {
            this.videoContainerEl.requestFullscreen({ navigationUI: "hide" });
            return "custom-fullscreen";
        }
        else if ((this.videoContainerEl as any).webkitRequestFullscreen) {
            (this.videoContainerEl as any).webkitRequestFullscreen({ navigationUI: "hide" });
            return "custom-fullscreen";
        }
        else if ((this.videoContainerEl as any).mozRequestFullScreen) {
            (this.videoContainerEl as any).mozRequestFullScreen({ navigationUI: "hide" });
            return "custom-fullscreen";
        }
        else if ((this.videoContainerEl as any).msRequestFullScreen) {
            (this.videoContainerEl as any).msRequestFullScreen({ navigationUI: "hide" });
            return "custom-fullscreen";
        }
        else if ((this.videoContainerEl as any).webkitEnterFullScreen) {
            (this.videoContainerEl as any).webkitEnterFullScreen({ navigationUI: "hide" });
            return "custom-fullscreen";
        }
        else if (this.videoEl.requestFullscreen) {
            this.videoEl.requestFullscreen();
            return "default-fullscreen";
        }
        else if ((this.videoEl as any).webkitRequestFullscreen) {
            (this.videoEl as any).webkitRequestFullscreen({ navigationUI: "hide" });
            return "default-fullscreen";
        }
        else if ((this.videoEl as any).mozRequestFullScreen) {
            (this.videoEl as any).mozRequestFullScreen({ navigationUI: "hide" });
            return "default-fullscreen";
        }
        else if ((this.videoEl as any).msRequestFullScreen) {
            (this.videoEl as any).msRequestFullScreen({ navigationUI: "hide" });
            return "default-fullscreen";
        }
        else if ((this.videoEl as any).webkitEnterFullScreen) {
            (this.videoEl as any).webkitEnterFullScreen({ navigationUI: "hide" });
            return "default-fullscreen";
        }
        else {
            return "normal";
        }
    }

    exitCustomFullScreen(): ScreenMode {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
            (document as any).mozCancelFullScreen();
        } else if ((document as any).msExitFullscreen) {
            (document as any).msExitFullscreen();
        }
        return "normal";
    }

    private getFormattedTime(seconds: number): string {
        const formattedMinutes = Math.floor(seconds / 60);
        const formattedSeconds = Math.floor(seconds % 60)
            .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
        return `${formattedMinutes}:${formattedSeconds}`;
    }
}
