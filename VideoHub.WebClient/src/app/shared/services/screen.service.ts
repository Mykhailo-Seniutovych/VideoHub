import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

const DESKTOP_SMALL_QUERY = "(min-width: 1024px) and (max-width: 1279.98px)";
const DESKTOP_LARGE_QUERY = "(min-width: 1280px)";

@Injectable({
    providedIn: "root"
})
export class ScreenService {
    private desktopMatcher = [DESKTOP_SMALL_QUERY, DESKTOP_LARGE_QUERY];

    isDesktop$: Observable<boolean> = this.breakpointObserver
        .observe(this.desktopMatcher)
        .pipe(map((result: BreakpointState) => result.matches));

    get isDesktop(): boolean {
        return this.breakpointObserver.isMatched(this.desktopMatcher);
    }

    constructor(private breakpointObserver: BreakpointObserver) { }
}
