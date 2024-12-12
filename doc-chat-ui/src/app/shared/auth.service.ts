import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly AUTH_KEY = 'auth_token';
  private loginStatus = new BehaviorSubject<boolean>(this.isLoggedIn());
  private adminStatus = new BehaviorSubject<boolean>(this.isAdmin());

  loginStatus$ = this.loginStatus.asObservable();
  adminStatus$ = this.adminStatus.asObservable();

  login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem(
        this.AUTH_KEY,
        JSON.stringify({ email: user.email, isAdmin: user.isAdmin || false })
      );
      this.loginStatus.next(true); // Notify observers
      this.adminStatus.next(user.isAdmin || false); // Update admin status
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.AUTH_KEY);
  }

  isAdmin(): boolean {
    const authData = JSON.parse(localStorage.getItem(this.AUTH_KEY) || '{}');
    return authData.isAdmin || false;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
    this.loginStatus.next(false); // Notify observers
    this.adminStatus.next(false); // Reset admin status
  }

  addAdminUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const adminExists = users.some((user: any) => user.email === 'admin@x.com');

    if (!adminExists) {
      users.push({
        fullName: 'Admin User',
        email: 'admin@x.com',
        password: 'admin123',
        isAdmin: true, // Admin flag
      });
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}
