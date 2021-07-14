import { BehaviorSubject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class SearchService {
    private searchedValueSub = new BehaviorSubject<string>("");
    searchedValue$ = this.searchedValueSub.asObservable().pipe(debounceTime(500), distinctUntilChanged());

    setValue(value: string): void {
        this.searchedValueSub.next(value);
    }
}
