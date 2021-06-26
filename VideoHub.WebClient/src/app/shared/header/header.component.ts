import { AuthService } from "src/app/authorization";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SearchService } from "./../services/search.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    user$ = this.authService.user$;

    constructor(
        private readonly authService: AuthService,
        private readonly searchService: SearchService) {
    }

    async logout(): Promise<void> {
        await this.authService.logout();
    }

    search(value: string): void {
        this.searchService.setValue(value);
    }
}
