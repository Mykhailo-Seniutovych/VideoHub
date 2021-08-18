import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: "root"
})
export class SnackBarService {
    constructor(private readonly snackBar: MatSnackBar) { }

    showError(message: string): void {
        this.snackBar.open(message, "close", { duration: 10000, panelClass: "error-snackbar" });
    }
}
