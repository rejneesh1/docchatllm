import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {}

  showAlert(message: string, action: string = 'OK', config: MatSnackBarConfig = {}): void {
    const defaultConfig: MatSnackBarConfig = {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
    };

    // Merge default config with custom config
    const mergedConfig = { ...defaultConfig, ...config };

    this.snackBar.open(message, action, mergedConfig);
  }
}
