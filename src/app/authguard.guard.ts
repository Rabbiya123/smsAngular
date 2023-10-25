import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../app/auth-service.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  canActivate(): boolean {
    console.log('AuthGuard canActivate is triggered');
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      console.log('AuthGuard redirecting to login');
      this.router.navigate(['/agent-login']);
      return false;
    }
  }
}
