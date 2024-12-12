import { Component, OnInit } from '@angular/core';

import { WelcomeComponent } from './welcome/welcome.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './shared/auth.service';
import { NgIf } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  standalone: true,
  imports: [RouterModule, NgIf , MatToolbarModule , MatButtonModule, MatIconModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdminLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.loginStatus$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    this.authService.adminStatus$.subscribe((status) => {
      this.isAdminLoggedIn = status;
    });

    this.authService.addAdminUser()
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
