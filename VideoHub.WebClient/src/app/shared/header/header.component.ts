import { AuthService } from "src/app/authorization";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, ViewChild } from "@angular/core";
import { SearchService } from "./../services/search.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent {
    @ViewChild("searchInput") searchInput: ElementRef;

    user$ = this.authService.user$;
    searchValue = "";

    private isSearchActivated = false;
    private isSearchTextFilled = false;

    constructor(
        private readonly authService: AuthService,
        private readonly searchService: SearchService) {
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

    search(value: string): void {
        this.searchService.setValue(value);
    }

    onSearchClicked(): void {
        if (this.isSearchActivated) {
            this.search(this.searchValue);
        } else {
            setTimeout(() => this.searchInput.nativeElement.focus());
        }

        this.isSearchActivated = !this.isSearchActivated;
        this.searchValue = "";
        this.isSearchTextFilled = false;
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
}
