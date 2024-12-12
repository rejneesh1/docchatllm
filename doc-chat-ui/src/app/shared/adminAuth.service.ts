import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn() && this.authService.isAdmin()) {
      return true; // Allow access if the user is logged in and is an admin
    }

    // Redirect to login or an error page if not authorized
    this.authService.logout()
    this.router.navigate(['/login']);
    return false;
  }
}
