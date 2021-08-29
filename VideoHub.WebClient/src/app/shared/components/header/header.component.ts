import { AuthService } from "src/app/authorization";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, ViewChild } from "@angular/core";
import { MainNavigationService } from "./../../services/main-navigation.service";
import { MatDialog } from "@angular/material/dialog";
import { PAGE_ROUTES } from "src/app/utils";
import { Router } from "@angular/router";
import { ScreenService } from "./../../services/screen.service";
import { SearchService } from "./../../services/search.service";
import { UploadVideoComponent } from "../upload-video/upload-video.component";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent {
    @ViewChild("searchInput") searchInput: ElementRef;

    isDektopScreen$ = this.screenService.isDesktop$;

    user$ = this.authService.user$;
    searchValue = "";

    private isSearchActivated = false;
    private isSearchTextFilled = false;

    constructor(
        private readonly authService: AuthService,
        private readonly searchService: SearchService,
        private readonly navigationService: MainNavigationService,
        private readonly screenService: ScreenService,
        private readonly router: Router,
        private readonly dialog: MatDialog) {
    }

    @HostBinding("class.search-activated") get searchActivated(): boolean {
        return this.isSearchActivated;
    }

    @HostBinding("class.search-text-filled") get searchFilled(): boolean {
        return this.isSearchTextFilled;
    }

    async logout(): Promise<void> {
        await this.authService.logout();
    }

    onMenuClicked(): void {
        this.navigationService.toggleOpened();
    }

    @HostListener("document:keydown", ["$event"])
    onKeyDown(event: KeyboardEvent): void {
        if (event.key === "Enter") {
            this.onSearchClicked();
        }
    }

    async onSearchClicked(): Promise<void> {
        if (this.isSearchActivated) {
            this.search(this.searchValue);
        } else {
            setTimeout(() => this.searchInput.nativeElement.focus());
        }

        this.isSearchActivated = !this.isSearchActivated;
        this.searchValue = "";
        this.isSearchTextFilled = false;
    }

    async search(value: string): Promise<void> {
        await this.router.navigateByUrl(PAGE_ROUTES.videos);
        this.searchService.setValue(value);
    }

    onInputChange(event: any): void {
        this.searchValue = event.target.value;
        this.isSearchTextFilled = !!this.searchValue;
    }

    onClearClicked(): void {
        this.searchValue = "";
        setTimeout(() => this.isSearchTextFilled = false, 100);
    }

    onBackClicked(): void {
        this.isSearchActivated = false;
        this.isSearchTextFilled = false;
    }

    openMenu(): void {
        if (this.screenService.isDesktop) {
            this.dialog.open(UploadVideoComponent, {
                width: "600px",
                maxHeight: "90vh",
                disableClose: true,
            });
        } else {
            this.dialog.open(UploadVideoComponent, {
                maxWidth: "100vw",
                maxHeight: "100vh",
                height: "100%",
                width: "100%",
                disableClose: true,
            });
        }
    }
}
