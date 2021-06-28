import { AuthService } from "src/app/authorization";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, ViewChild } from "@angular/core";
import { SearchService } from "./../services/search.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @ViewChild("searchInput") searchInput: ElementRef;

    isSearchActivated = false;
    user$ = this.authService.user$;

    constructor(
        private readonly authService: AuthService,
        private readonly searchService: SearchService) {
    }

    @HostBinding("class.search-activated") get valid(): boolean {
        return this.isSearchActivated;
    }

    async logout(): Promise<void> {
        await this.authService.logout();
    }

    search(value: string): void {
        this.searchService.setValue(value);
    }

    toggleSearch(): void {
        this.isSearchActivated = !this.isSearchActivated;
        setTimeout(() => this.searchInput.nativeElement.focus());
    }
}
