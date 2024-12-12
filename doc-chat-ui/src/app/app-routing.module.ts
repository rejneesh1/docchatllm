import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './shared/adminAuth.service';

const routes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((mod) => mod.AboutComponent),
    canActivate: [AuthGuard],
  },

  {
    path: 'chat',
    loadComponent: () =>
      import('./chat-window/chat-window.component').then(
        (mod) => mod.ChatWindowComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/routes').then((mod) => mod.DASHBOARD_ROUTES),
    canActivate: [AuthGuard,AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
