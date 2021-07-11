import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { MatDrawerMode } from "@angular/material/sidenav";
import { ScreenService } from "./screen.service";

@Injectable({
    providedIn: "root"
})
export class MainNavigationService {
    private isManuallyOpened = false;
    private isManuallyOpenedSub = new BehaviorSubject<boolean>(this.isManuallyOpened);

    isNavOpened$ = combineLatest([this.isManuallyOpenedSub, this.screenService.isDesktop$])
        .pipe(map(([isManuallyOpened, isDesktop]) => isManuallyOpened || isDesktop));
    navMode$: Observable<MatDrawerMode> = this.screenService.isDesktop$
        .pipe(map(isDesktop => isDesktop ? "side" : "over"));

    setOpened(value: boolean): void {
        this.isManuallyOpened = value;
        this.isManuallyOpenedSub.next(this.isManuallyOpened);
    }

    toggleOpened(): void {
        this.isManuallyOpened = !this.isManuallyOpened;
        this.isManuallyOpenedSub.next(this.isManuallyOpened);
    }

    constructor(private readonly screenService: ScreenService) { }
}
