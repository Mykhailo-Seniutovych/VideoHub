import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ScreenService {
    isDesktop$: Observable<boolean> = this.breakpointObserver
        .observe([Breakpoints.Large, Breakpoints.XLarge])
        .pipe(map((result: BreakpointState) => result.matches));

    constructor(private breakpointObserver: BreakpointObserver) { }
}
